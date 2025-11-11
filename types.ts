import type { IconName } from 'wit-vue-ui'

export enum LocaleCodes {
  en = 'en',
  // es = 'es',
}

export type Locale = {
  key: LocaleCodes
  code: string
  file: string
  label: string
  icon: string | null
}

export type Exchange = {
  name: string
  logo: IconName
  link: string
}

export enum ButtonType {
  primary = 'primary',
  dark = 'dark',
  secondary = 'secondary',
  terciary = 'terciary',
  disabled = 'disabled',
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
