import { getCurrentLanguage } from '../../../../utils'

describe('getCurrentLanguage', () => {
  it('should return the correct language when the locale is in the url', () => {
    const url = '/es/meter/meter-mainnet_mtr-usdt_6'

    const expectedLanguage = {
      code: 'es',
      iso: 'es-ES',
      label: 'Español',
      name: 'Español',
    }
    expect(getCurrentLanguage(url)).toStrictEqual(expectedLanguage)
  })
  it('should return the correct language when no locale is specified in the url', () => {
    const url = '/meter/meter-mainnet_mtr-usdt_6'
    const expectedLanguage = {
      code: 'en',
      isCatchallLocale: true,
      iso: 'en-US',
      label: 'English',
      name: 'English',
    }
    expect(getCurrentLanguage(url)).toStrictEqual(expectedLanguage)
  })
})
