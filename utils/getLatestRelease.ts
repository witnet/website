import { getBrowserOs } from './getBrowserOs'
// TODO: move to constants
export const URL_RELEASE_BASE =
  'https://api.github.com/repos/witnet/witnet-rust/releases/latest'

export async function getLatestRelease(navigator: any) {
  return await fetch(URL_RELEASE_BASE).then(async (result: any) => {
    const json = await result.json()
    const os = await getBrowserOs(navigator).toLowerCase()

    const macRelease = json.assets.find((asset: any) =>
      asset.browser_download_url.includes('apple')
    )
    const linuxRelease = json.assets.find((asset: any) =>
      asset.browser_download_url.includes('aarch64-unknown-linux-gnu')
    )
    const windowsRelease = json.assets.find((asset: any) =>
      asset.browser_download_url.includes('x86_64-pc-windows')
    )
    console.log(linuxRelease.size / 1024 / 1024)
    const release = {
      linux: {
        platform: 'Linux',
        releaseUrl: linuxRelease.browser_download_url,
        size: linuxRelease.size
      },
      win: {
        platform: 'Windows',
        releaseUrl: windowsRelease.browser_download_url,
        size: linuxRelease.size 
      },
      mac: {
        platform: 'macOS',
        releaseUrl: macRelease.browser_download_url,
        size: linuxRelease.size 
      },
    }
    return (release as any)[os] as any
  })
}