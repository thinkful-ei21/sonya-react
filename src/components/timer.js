import React from 'react';
import './timer.css';

export default function Timer(props) {

  return (
    <div className='timer'>
      <h1>Time Yourself!!</h1>
      <p>minutes: 0 seconds: 0</p> <br/>
   
      <button onClick={props.onClickStart}>Start</button> 
      <button onClick={props.onClickStop}>Stop</button>
    </div>

  )
}