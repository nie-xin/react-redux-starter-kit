import React from 'react'
import { IndexLink, Link } from 'react-router'
import { defineMessages, FormattedMessage } from 'react-intl'
import LanguageSelectView from '../LanguageSelect/LanguageSelectView'
import classes from './Header.scss'

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

export const Header = ({ localeChange }) => (
  <div>
    <FormattedMessage {...messages.welcome}>
      {text => <h1>{text}</h1>}
    </FormattedMessage>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      <FormattedMessage {...messages.navbarItem1} />
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      <FormattedMessage {...messages.navbarItem2} />
    </Link>

    <LanguageSelectView localeChange={localeChange} />
  </div>
)

Header.propTypes = {
  localeChange: React.PropTypes.func.isRequired
}

export default Header
