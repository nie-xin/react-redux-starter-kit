import React from 'react'
import Select from 'antd/lib/select'
const Option = Select.Option

export const LanguageSelect = (props) => (
  <Select
    defaultValue='en'
    onChange={props.localeChange}
    >
    <Option value='en'>en</Option>
    <Option value='fr'>fr</Option>
  </Select>
)

LanguageSelect.propTypes = {
  localeChange: React.PropTypes.func.isRequired
}

export default LanguageSelect
