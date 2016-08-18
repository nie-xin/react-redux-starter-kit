import React from 'react'
import LanguageSelectView from 'components/LanguageSelect/LanguageSelectView'
import { bindActionCreators } from 'redux'
import { shallow } from 'enzyme'

describe('(Component) LanguageSelectView', () => {
  let _wrapper, _spies, _props

  beforeEach(() => {
    _spies = {}
    const actionCreators = bindActionCreators({
      localeChange: (_spies.localeChange = sinon.spy())
    }, _spies.dispatch = sinon.spy())
    _props = Object.assign({ locale: 'en' }, actionCreators)
    _wrapper = shallow(<LanguageSelectView {..._props} />)
  })

  it('Should render a Select component', () => {
    const select = _wrapper.find('select')
    expect(select).to.exist
  })

  describe('Select ...', () => {
    let select

    beforeEach(() => {
      select = _wrapper.find('select')
    })

    it('Should render predefined options', () => {
      const options = select.find('option')
      expect(options).to.have.length.of(2)
    })

    it('Should dispatch localChange on change', () => {
      _spies.localeChange.should.have.not.been.called
      _wrapper.simulate('change', { target: { value: 'fr' } })
      _spies.localeChange.should.have.been.called
    })
  })
})
