import { loadIntlPolyfill, loadLocaleData } from 'utils/Intl'

// ------------------------------------
// Constants
// ------------------------------------
export const LOCALE_CHANGE = 'LOCALE_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function localeChange (locale = 'en') {
  return (dispatch, getState) => {
    return loadIntlPolyfill(locale)
      .then(loadLocaleData.bind(null, locale))
      .then(dispatch.bind(null, { type: LOCALE_CHANGE, payload: locale }))
      .catch(error => { throw new Error(error) })
  }
}

export const actions = { localeChange }

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOCALE_CHANGE]: (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 'en'
export default function languageSelectReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
