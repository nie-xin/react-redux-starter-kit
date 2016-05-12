import React from 'react'
import LanguageSelectView from 'components/LanguageSelect/components/LanguageSelectView'
import { bindActionCreators } from 'redux'
import { shallow, mount } from 'enzyme'
import Select from 'antd/lib/select'

const Option = Select.Option

describe('(Component) LanguageSelectView', () => {
  let _wrapper, _spies, _props

  beforeEach(() => {
    _spies = {}
    _props = {
      locale: 'en',
      ...bindActionCreators({
        localeChange: (_spies.localeChange = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<LanguageSelectView {..._props} />)
  })

  it('Should render a Select component', () => {
    const select = _wrapper.find(Select)
    expect(select).to.exist
  })

  describe('Select ...', () => {
    let select

    beforeEach(() => {
      select = _wrapper.find(Select)
    })

    it('Should render predefined options', () => {
      const options = select.find(Option)
      expect(options).to.have.length.of(2)
    })
  })
})
