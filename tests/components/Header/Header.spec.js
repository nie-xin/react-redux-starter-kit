import React from 'react'
import { Header } from 'components/Header/Header'
import LanguageSelect from 'components/LanguageSelect/containers/LanguageSelectContainer'
import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'
import { FormattedMessage } from 'react-intl'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header/>)
  })

  it('Should render a welcome message', () => {
    const welcome = _wrapper.find(FormattedMessage)
    expect(welcome).to.exist
  })

  it('Should render a language select', () => {
    expect(_wrapper).to.contain(<LanguageSelect />)
  })

  describe('Navigation links...', () => {

    it('Should render an IndexLink to Home route', () => {
      expect(_wrapper.contains(<IndexLink to='/'/>)).to.equal.true
    })

    it('Should render an Link to Counter route)', () => {
      expect(_wrapper.contains(<Link to='/counter'/>)).to.equal.true
    })

  })
})
