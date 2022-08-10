import { defaultLocale } from './default'
import { languages } from './constants'

export function findLanguage(locale) {
  return getExpandedLanguages().find((language) => language.code === locale)
}

export function getLanguageFromUrl(url) {
  return url.split('/')[1]
}
export function getExpandedLanguages() {
  return languages.map((language) => ({
    ...language,
    label: language.name,
  }))
}
export function getCurrentLanguage(url) {
  return findLanguage(getLanguageFromUrl(url)) || findLanguage(defaultLocale)
}
