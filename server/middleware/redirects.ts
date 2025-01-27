export default defineEventHandler((event) => {
  const { req, res } = event

  const redirects: Record<string, string> = {
    '/x': 'https://x.com/witnet_io',
    '/twitter': 'https://x.com/witnet_io',
    '/discord': 'http://discord.gg/witnet',
    '/telegram': 'https://t.me/witnetio',
    '/linkedin': 'https://www.linkedin.com/company/witnet/',
    '/github': 'https://github.com/witnet',
    '/docs': 'https://docs.witnet.io/',
    '/medium': 'https://medium.com/witnet',
    '/reddit': 'https://www.reddit.com/r/witnet/',
    '/foundation': 'https://witnet.foundation/',
    '/ethereum': 'https://feeds.witnet.io/ethereum',
  }

  const redirectUrl = redirects[req.url as string]

  if (redirectUrl) {
    res.writeHead(302, { Location: redirectUrl })
    res.end()
  }
})
