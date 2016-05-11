import React from 'react'
import LanguageSelect from 'components/LanguageSelect/components/LanguageSelect'
import { bindActionCreators } from 'redux'
import { shallow, mount } from 'enzyme'
import Select from 'antd/lib/select'

const Option = Select.Option

describe('(Component) LanguageSelect', () => {
  let _wrapper, _spies, _props

  beforeEach(() => {
    _spies = {}
    _props = {
      locale: 'en',
      ...bindActionCreators({
        localeChange: (_spies.localeChange = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<LanguageSelect {..._props} />)
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

    it('Should dispatch `localeChange` action when changed', () => {
      _spies.dispatch.should.have.not.been.called

      select.simulate('change')

      _spies.dispatch.should.have.been.called
      _spies.localeChange.should.have.been.called
    })
  })
})
