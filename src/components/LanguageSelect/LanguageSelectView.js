import React from 'react'

const onSelectChange = (callback) => (event) => callback(event.target.value)

export const LanguageSelectView = ({ localeChange }) => (
  <select
    defaultValue='en'
    onChange={onSelectChange(localeChange)}
  >
    <option value='en'>en</option>
    <option value='fr'>fr</option>
  </select>
)

LanguageSelectView.propTypes = {
  localeChange: React.PropTypes.func.isRequired
}

export default LanguageSelectView
