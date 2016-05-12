import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  content: {
    id: 'home.content',
    description: 'Home view description',
    defaultMessage: 'Home view defalut content'
  }
})

export const HomeView = () => (
  <div>
    <FormattedMessage {...messages.content}>
      {text => <h4>{text}</h4>}
    </FormattedMessage>

    <img
      alt='This is a duck, because Redux!'
      className={classes.duck}
      src={DuckImage} />
  </div>
)

export default HomeView
