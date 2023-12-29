export enum localeCodes {
  en = 'en-US',
  es = 'es-ES',
}

export type Locale = {
  code: string
  iso: string
  name: string
  file: string
}

export interface LanguageDictionary {
  [localeCodes.en]: Locale
  [localeCodes.es]: Locale
}
