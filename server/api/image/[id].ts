import path from 'path'
import fs from 'fs/promises'
import { CACHE_DIR } from '~/server/utils'

export default defineEventHandler(async (event) => {
  const imageUrl = getRouterParam(event, 'id') as string

  if (!imageUrl) {
    throw createError({ statusCode: 400, statusMessage: 'Missing image URL' })
  }

  try {
    const cachedImage = await fs.readFile(path.join(CACHE_DIR, imageUrl))
    const ext = path.extname(imageUrl)
    event.node.res.setHeader('Content-Type', getContentType(ext))
    return cachedImage
  } catch (err) {
    console.error('Error reading image from cache:', err)
    throw createError({ statusCode: 400, statusMessage: 'Image not found' })
  }
})

function getContentType(ext: string): string {
  switch (ext.toLowerCase()) {
    case '.png':
      return 'image/png'
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg'
    case '.gif':
      return 'image/gif'
    case '.webp':
      return 'image/webp'
    default:
      return 'application/octet-stream'
  }
}
