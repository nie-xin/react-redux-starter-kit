import React from 'react'
import classes from './Counter.css'

export const Counter = (props) => (
  <div>
    <h2 className={classes.counterContainer}>
      Counter:
      {' '}
      <span className={classes['counter--green']}>
        {props.counter}
      </span>
    </h2>
    <button type='primary' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button type='primary' onClick={props.doubleAsync}>
      Double (Async)
    </button>
    {' '}
    <button type='primary' onClick={props.fetchAjax}>
      Star wars (Ajax)
    </button>
  </div>
)

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired,
  fetchAjax: React.PropTypes.func.isRequired
}

export default Counter
