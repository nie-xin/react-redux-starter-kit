import React from 'react'
import { IndexLink, Link } from 'react-router'
import { defineMessages, FormattedMessage } from 'react-intl'
import Select from 'antd/lib/select'
import classes from './Header.scss'

const messages = defineMessages({
  welcome: {
    id: 'home.welcome',
    description: 'Welcome message to the user',
    defaultMessage: 'React Redux Starter Kit'
  }
})

export const Header = () => (
  <div>
    <FormattedMessage {...messages.welcome}>
      {text => <h1>{text}</h1>}
    </FormattedMessage>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>

    <Select defaultValue='en'>
      <Option value='en'>en</Option>
      <Option value='fr'>fr</Option>
    </Select>
  </div>
)

export default Header
