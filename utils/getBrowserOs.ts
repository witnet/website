export function getBrowserOs(navigator: Navigator) {
  return navigator.userAgentData?.platform
    ? detectPlatformWithUserAgentData(navigator)
    : detectPlatform(navigator)
}

const detectPlatformWithUserAgentData = (navigator: Navigator) => {
  const userAgentData: NavigatorUAData | undefined = navigator.userAgentData
  return userAgentData?.platform.toLowerCase()
}

const detectPlatform = (navigator: Navigator): string | undefined => {
  const ua = navigator.userAgent.toLowerCase().replace(/^mozilla\/\d\.\d\W/, '')
  const mobiles: Record<string, RegExp> = {
    iphone: /iphone/,
    ipad: /ipad|macintosh/,
    android: /android/,
  }
  const desktops: Record<string, RegExp> = {
    windows: /win/,
    macos: /macintosh/,
    linux: /linux/,
  }
  // Determine the operating system
  const mobileOS = Object.keys(mobiles).find(
    (os) => mobiles[os].test(ua) && navigator.maxTouchPoints >= 1,
  )
  const desktopOS = Object.keys(desktops).find((os) => desktops[os].test(ua))
  const os = mobileOS || desktopOS
  return os
}
