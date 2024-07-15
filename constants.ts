import { localeCodes, type LanguageDictionary } from './types'

export const URLS: Record<string, string> = {
  ado: 'https://github.com/adoracles/',
  advocateProgram:
    'https://witnet.notion.site/The-Witnet-Advocate-Program-f572baff6b1d49a69d4db785a924fc61',
  bitmart: 'https://www.bitmart.com/trade/en-US?symbol=WIT_USDT',
  block_explorer: 'https://witnet.network/',
  changelly: '#',
  data_feeds_explorer: 'https://feeds.witnet.io',
  discord: 'https://discord.gg/witnet',
  docker_node: 'https://hub.docker.com/r/witnet/witnet-rust/tags',
  documentation: 'https://docs.witnet.io/',
  gate: 'https://www.gate.io/trade/WIT_USDT',
  github: 'https://github.com/witnet',
  grantProgram:
    'https://witnet.notion.site/The-Witnet-Grant-Program-0e6bc5ddbe4a4bf8a22c262dedfe268f',
  letsexchange: 'https://letsexchange.io/coin/wit',
  linux_node: 'https://github.com/witnet/witnet-rust/releases',
  macos_node: 'https://github.com/witnet/witnet-rust/releases',
  mediaKit:
    'https://drive.google.com/drive/u/1/folders/1z9dSts64xyaIZqRvniMPDib7UWOE2P3z',
  medium: 'https://medium.com/witnet',
  mexc: 'https://www.mexc.com/exchange/WIT_USDT',
  my_wit_wallet: 'https://mywitwallet.com/',
  newsletter: 'http://eepurl.com/iDxYzs',
  rasberrypi_node: 'https://github.com/witnet/witnet-rust/releases',
  reddit: 'https://reddit.com/r/witnet',
  simpleSwap: 'https://simpleswap.io/coins/wit',
  telegram: 'https://t.me/witnetio',
  windows_node: 'https://github.com/witnet/witnet-rust/releases',
  witnet_foundation: 'https://witnet.foundation',
  x: 'https://twitter.com/witnet_io',
}

export const languageLocales: LanguageDictionary = {
  [localeCodes.en]: {
    code: 'en-US',
    iso: 'en-US',
    name: 'English(US)',
    file: 'en-US.json',
  },
  [localeCodes.es]: {
    code: 'es-ES',
    iso: 'es-ES',
    name: 'Español(ES)',
    file: 'es-ES.json',
  },
}
