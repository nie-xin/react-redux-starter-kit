import React from 'react'
import Header from 'components/Header'
import classes from './CoreLayout.css'
import 'normalize.css'
import 'styles/core.css'

export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
