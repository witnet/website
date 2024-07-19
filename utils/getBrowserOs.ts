export const DEFAULT_OS = 'Linux'

export function getBrowserOs(navigator: any) {
  const supportedOs = ['Win', 'Mac', 'Linux']
  const platform = navigator.platform

  return supportedOs.find((os) => platform.includes(os)) || DEFAULT_OS
}
