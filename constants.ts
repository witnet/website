import { localeCodes, type LanguageDictionary } from './types'

export const URLS: Record<string, string> = {
  telegram: 'https://t.me/witnetio',
  discord: 'https://discord.gg/witnet',
  twitter: 'https://twitter.com/witnet_io',
  github: 'https://github.com/witnet/my-wit-wallet/issues',
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
