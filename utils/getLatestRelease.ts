import { GITHUB_RELEASE_URL } from '../constants'

export type Release = {
  platform: string
  releaseUrl: string
  downloadName: string | null
  size: number | null
}

export type LatestReleaseResponse = {
  assets: Array<ReleaseAsset>
}

export type ReleaseAsset = {
  browser_download_url: string
  name: string | null
}

export function getLatestRelease({
  os,
  data,
}: {
  os: string
  data: LatestReleaseResponse | undefined
}): Release | null {
  if (data) {
    const macRelease: ReleaseAsset = data.assets.find((asset: ReleaseAsset) => {
      return asset.browser_download_url.includes('apple')
    }) ?? { browser_download_url: GITHUB_RELEASE_URL, name: null }
    const linuxRelease: ReleaseAsset = data.assets.find((asset: ReleaseAsset) =>
      asset.browser_download_url.includes('aarch64-unknown-linux-gnu'),
    ) ?? { browser_download_url: GITHUB_RELEASE_URL, name: null }
    const windowsRelease: ReleaseAsset = data.assets.find(
      (asset: ReleaseAsset) =>
        asset.browser_download_url.includes('x86_64-pc-windows'),
    ) ?? { browser_download_url: GITHUB_RELEASE_URL, name: null }

    const release: Record<string, Release> = {
      linux: {
        platform: 'GNU / Linux',
        releaseUrl: linuxRelease.browser_download_url,
        downloadName: linuxRelease.name,
      },
      macos: {
        platform: 'Mac OS',
        releaseUrl: macRelease.browser_download_url,
        downloadName: macRelease.name,
      },
      windows: {
        platform: 'Windows',
        releaseUrl: windowsRelease.browser_download_url,
        downloadName: null,
      },
    }
    return release[os]
  }
  return null
}
