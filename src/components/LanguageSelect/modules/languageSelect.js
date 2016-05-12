import IntlUtils from 'utils/Intl'

// ------------------------------------
// Constants
// ------------------------------------
export const LOCALE_CHANGE = 'LOCALE_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function localeChange (value = 'en') {
  return {
    type: LOCALE_CHANGE,
    payload: value
  }
}

export function localeLoad (locale = 'en') {
  return (dispatch, getState) => {
    return IntlUtils.loadLocaleData(locale)
      .then(() => dispatch(localeChange(locale)))
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
