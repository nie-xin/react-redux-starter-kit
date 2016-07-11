import React from 'react'
import Header from 'components/Header'
import classes from './CoreLayout.scss'
import 'styles/core.scss'
// TODO: Move antd style to core.scss after following issue resolved
// https://github.com/davezuko/react-redux-starter-kit/issues/474
import 'antd/lib/index.css'

export const CoreLayout = ({ children, localeChange }) => (
  <div className='container text-center'>
    <Header localeChange={localeChange} />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
  localeChange: React.PropTypes.func.isRequired
}

export default CoreLayout