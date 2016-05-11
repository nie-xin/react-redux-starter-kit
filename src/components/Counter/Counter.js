import React from 'react'
import classes from './Counter.scss'
import Button from 'antd/lib/button'

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
      Increment
    </Button>
    {' '}
    <Button type='primary' onClick={props.doubleAsync}>
      Double (Async)
    </Button>
  </div>
)

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Counter
