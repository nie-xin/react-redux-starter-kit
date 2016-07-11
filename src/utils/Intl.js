// Load locale data for current language
// Intl polyfill required for browser not supporting
// the loading of locale data should be executed before rendering the root component
import { addLocaleData } from 'react-intl'
import isIntlLocaleSupported from 'intl-locales-supported'

export function loadIntlPolyfill (locale) {
  if (window.Intl && isIntlLocaleSupported(locale)) {
    return Promise.resolve()
  }

  return new Promise(resolve => {
    // Create or load intl chunk by webpack
    require.ensure(['intl'], require => {
      // Add polyfill
      require('intl')
      resolve()
    }, 'intl')
  })
}

// Promise resolved when locale-data downloaded
// There will be two chunks: one for browser supporting intl and another
// for those don't support intl
export function loadLocaleData (locale) {
  const hasIntl = isIntlLocaleSupported(locale)

  // Make sure ReactIntl is in global scope
  require('expose?ReactIntl!react-intl')

  return new Promise(resolve => {
    // Consider composed switch if condition block growing too big
    switch (locale) {
      case 'fr':
        if (!hasIntl) {
          require.ensure([
            'intl/locale-data/jsonp/fr',
            'react-intl/locale-data/fr'
          ], require => {
            require('intl/locale-data/jsonp/fr')
            addLocaleData(require('react-intl/locale-data'))
            resolve()
          }, 'locale-fr')
        } else {
          require.ensure([
            'react-intl/locale-data/fr'
          ], require => {
            addLocaleData(require('react-intl/locale-data/fr'))
            resolve()
          }, 'locale-fr-no-intl')
        }
        break
      default:
        if (!hasIntl) {
          require.ensure([
            'intl/locale-data/jsonp/en'
          ], require => {
            require('intl/locale-data/jsonp/en')
            resolve()
          }, 'locale-en')
        } else {
          resolve()
        }
    }
  })
}
