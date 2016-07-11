import React from 'react'
import Select from 'antd/lib/select'
const Option = Select.Option

export const LanguageSelectView = ({ localeChange }) => (
  <Select
    defaultValue='en'
    onChange={localeChange}
  >
    <Option value='en'>en</Option>
    <Option value='fr'>fr</Option>
  </Select>
)

LanguageSelectView.propTypes = {
  localeChange: React.PropTypes.func.isRequired
}

export default LanguageSelectView
