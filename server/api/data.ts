import { createHash } from 'node:crypto'
import fs from 'fs'
import path from 'path'
import { Client } from '@notionhq/client'
import { CACHE_DIR } from '../utils'

export default defineEventHandler(async (_event) => {
  const { NOTION_DATABASE_ID, NOTION_API_KEY } = process.env

  if (!NOTION_DATABASE_ID || !NOTION_API_KEY) {
    throw new Error('NOTION_DATABASE_ID or NOTION_API_KEY is not set')
  }

  try {
    const notion = new Client({
      auth: NOTION_API_KEY,
    })

    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
    })

    // Cannot use Notion types because exported type is not compatible with the one in the client
    const items = response.results
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((page: any) => {
        const properties = page.properties
        return {
          id: page.id,
          title: properties.title?.title[0]?.plain_text || '',
          bannerImage: getImageUrl(properties.banner?.files[0]) || '',
          description: properties.description?.rich_text[0]?.plain_text || '',
          date: properties.date?.date?.start || '',
          url: properties.url?.url || '',
          actionText: properties.action_text?.rich_text[0]?.plain_text || '',
          labels:
            properties.labels?.multi_select?.map(
              (label: { name: string }) => label.name,
            ) || [],
          tags:
            properties.tags?.multi_select?.map(
              (tag: { name: string }) => tag.name,
            ) || [],
          publish: properties.publish?.checkbox || false,
        }
      })

    // Download images and store them if fs
    const imageURLs = await downloadImages(items)

    const events = items
      .map((item, index) => ({ ...item, bannerImage: imageURLs[index] }))
      .filter((item) => item.publish)
      .sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateB.getTime() - dateA.getTime()
      })

    return {
      success: true,
      data: events,
    }
  } catch (error) {
    console.error('Error fetching data from Notion:', error)
    return {
      success: false,
      error: 'Failed to fetch data from Notion',
    }
  }
})

function getImageUrl(
  file:
    | { type: string; file: { url: string } }
    | { type: string; external: { url: string } },
) {
  if ('file' in file) {
    return file.file.url
  } else if ('external' in file) {
    return file.external.url
  } else {
    // unreachable, file_upload is only generated using the Notion API
    // https://developers.notion.com/reference/file-object#file-uploads
    console.error('Unknown file type:', JSON.stringify(file))
    return ''
  }
}

async function downloadImages(items: Array<{ bannerImage: string }>) {
  // Make sure the cache directory exists
  fs.mkdirSync(CACHE_DIR, { recursive: true })

  const promises = items.map((item) => {
    if (item.bannerImage) {
      const imageName = item.bannerImage.split('/')[5].split('?')[0] || ''
      console.log('Downloading image:', imageName)
      // Create hash for the image URL (to use as filename)
      const hash = createHash('sha256').update(imageName).digest('hex')
      const ext = path.extname(imageName) || '.jpg' // basic extension fallback
      const filePath = path.join(CACHE_DIR, `${hash}${ext}`)

      if (!fs.existsSync(filePath)) {
        // Download from Notion. Public signed URL valid for 1 hour
        fetch(item.bannerImage)
          .then(async (response) => {
            if (!response.ok) {
              throw new Error(`Image fetch failed ${JSON.stringify(response)}`)
            }
            return response.arrayBuffer()
          })
          .then((arrayBuffer) => {
            // Don't use fs.writeFileSync because it will block the event loop
            // and cause performance issues
            fs.writeFile(filePath, Buffer.from(arrayBuffer), {}, (err) => {
              console.error('Error writing image to cache:', err)
            })
            return `/api/image/${hash}${ext}`
          })
          .catch((err) => {
            console.error('Error downloading image:', err)
          })
      } else {
        console.log('Image already exists in cache:', filePath)
        return `/api/image/${hash}${ext}`
      }
    }
  })

  return Promise.all(promises)
}
