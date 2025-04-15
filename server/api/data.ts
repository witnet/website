import { Client } from '@notionhq/client'

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const items = response.results.map((page: any) => {
      const properties = page.properties

      return {
        id: page.id,
        title: properties.title?.title[0]?.plain_text || '',
        bannerImage: properties.banner?.files[0]?.file?.url || '',
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
      }
    })

    return {
      success: true,
      data: items,
    }
  } catch (error) {
    console.error('Error fetching data from Notion:', error)
    return {
      success: false,
      error: 'Failed to fetch data from Notion',
    }
  }
})
