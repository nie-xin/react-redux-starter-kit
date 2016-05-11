import React from 'react'
import { Header } from 'components/Header/Header'
import classes from 'components/Header/Header.scss'
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

    it('Should render a Link to Home route', () => {
      expect(_wrapper.contains(
        <IndexLink activeClassName={classes.activeRoute} to='/'>
          Home
        </IndexLink>
      )).to.be.true
    })

    it('Should render a Link to Counter route', () => {
      expect(_wrapper.contains(
        <Link activeClassName={classes.activeRoute} to='/counter'>
          Counter
        </Link>
      )).to.be.true
    })
  })
})
