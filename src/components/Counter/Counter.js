import React from 'react'
import classes from './Counter.scss'
import Button from 'antd/lib/button'
import Icon from 'antd/lib/Icon'

export const Counter = (props) => (
  <div>
    <h2 className={classes.counterContainer}>
      Counter:
      {' '}
      <span className={classes['counter--green']}>
        {props.counter}
      </span>
    </h2>
    <Button type='primary' onClick={props.increment}>
      <Icon type='search' /> Increment
    </Button>
    {' '}
    <Button type='primary' onClick={props.doubleAsync}>
      <Icon type='link' /> Double (Async)
    </Button>
  </div>
)

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Counter
