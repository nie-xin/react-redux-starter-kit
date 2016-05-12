import React from 'react'
import Select from 'antd/lib/select'
const Option = Select.Option

export const LanguageSelectView = (props) => (
  <Select
    defaultValue='en'
    onChange={props.localeLoad}
    >
    <Option value='en'>en</Option>
    <Option value='fr'>fr</Option>
  </Select>
)

LanguageSelectView.propTypes = {
  localeLoad: React.PropTypes.func.isRequired
}

export default LanguageSelectView
