import { localeCodes, type LanguageDictionary } from './types'

export const URLS: Record<string, string> = {
  telegram: 'https://t.me/witnetio',
  discord: 'https://discord.gg/witnet',
  twitter: 'https://twitter.com/witnet_io',
  github: 'https://github.com/witnet/my-wit-wallet/issues',
  dataFeedsExplorer: 'https://feeds.witnet.io',
  blockExplorer: 'https://witnet.network/',
  advocateProgram:
    'https://witnet.notion.site/The-Witnet-Advocate-Program-f572baff6b1d49a69d4db785a924fc61',
  grantProgram:
    'https://witnet.notion.site/The-Witnet-Grant-Program-0e6bc5ddbe4a4bf8a22c262dedfe268f',
  newsletter: 'http://eepurl.com/iDxYzs',
  bitmart: '',
  changelly: '',
  gateio: '',
  mexc: '',
  simpleSwap: '',
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
    name: 'Español',
    file: 'es-ES.json',
  },
}
