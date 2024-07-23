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

export enum ButtonType {
  primary = 'primary',
  dark = 'dark',
  secondary = 'secondary',
  terciary = 'terciary',
  disabled = 'disabled',
}

export interface LanguageDictionary {
  [localeCodes.en]: Locale
  // [localeCodes.es]: Locale
}

export type TutorialLink = {
  name: string
  url: string
}
export type TutorialList = {
  title: string
  tutorialLinks: Array<TutorialLink>
}

export enum ThemeKey {
  light = 'light',
  dark = 'dark',
}

export interface Themes {
  [ThemeKey.dark]: {
    icon: string
    key: string
  }
  [ThemeKey.light]: {
    icon: string
    key: string
  }
}
