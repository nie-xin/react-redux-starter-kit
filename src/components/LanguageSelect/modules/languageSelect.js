import { loadLocaleData } from 'utils/Intl'

// ------------------------------------
// Constants
// ------------------------------------
export const LOCALE_CHANGE = 'LOCALE_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function localeChange (locale = 'en') {
  return {
    type: LOCALE_CHANGE,
    payload: locale
  }
}

export function localeLoad (locale = 'en') {
  return (dispatch, getState) => {
    return loadLocaleData(locale)
      .then(response => dispatch(localeChange(locale)))
      .catch(error => console.error(error))
  }
}

export const actions = {
  localeChange,
  localeLoad
}

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
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
