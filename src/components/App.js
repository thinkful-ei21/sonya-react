import React from 'react';
import Timer from './timer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: 0,
      seconds: 0
    }
  }

    setInterval() {
      for (let i = 1; i < 30; i++) {
      console.log(`${i} seconds passed`)
    ,1000} 
      }


    startTimer(e) {
      this.setInterval()
    }

    stopTimer() {
      console.log('time stopped')
    }

render() {
  return (
    <Timer 
      onClickStart={console.log('button clicked again')} 
      onClickStop={e => this.stopTimer} />
)
}
}
