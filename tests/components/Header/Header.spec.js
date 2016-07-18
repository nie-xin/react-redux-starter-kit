import React from 'react'
import { shallowWithIntl } from '../../utils/intl-test-helper'
import { Header } from 'components/Header/Header'
import classes from 'components/Header/Header.scss'
import LanguageSelect from 'containers/LanguageSelectContainer'
import { IndexLink, Link } from 'react-router'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  welcome: {
    id: 'title.welcome',
    description: 'Welcome message to the user',
    defaultMessage: 'React Redux Starter Kit'
  },
  navbarItem1: {
    id: 'navbar.item1',
    description: 'First navbar item',
    defaultMessage: 'Home'
  },
  navbarItem2: {
    id: 'navbar.item2',
    description: 'second navbar item',
    defaultMessage: 'Counter'
  }
})

describe('(Component) Header', () => {
  let _wrapper, _props

  beforeEach(() => {
    _props = { locale: 'en' }
    _wrapper = shallowWithIntl(<Header {..._props} />)
  })

  it('Should render a welcome message', () => {
    expect(_wrapper.contains(
      <FormattedMessage {...messages.welcome}>
        {text => <h1>{text}</h1>}
      </FormattedMessage>
    )).to.be.true
  })

  it('Should render a language select', () => {
    expect(_wrapper.contains(
      <LanguageSelect />
    )).to.be.true
  })

  describe('Navigation links...', () => {
    it('Should render a Link to Home route', () => {
      expect(_wrapper.contains(
        <IndexLink to='/' activeClassName={classes.activeRoute}>
          <FormattedMessage {...messages.navbarItem1} />
        </IndexLink>
      )).to.be.true
    })

    it('Should render a Link to Counter route', () => {
      expect(_wrapper.contains(
        <Link to='/counter' activeClassName={classes.activeRoute}>
          <FormattedMessage {...messages.navbarItem2} />
        </Link>
      )).to.be.true
    })
  })
})
