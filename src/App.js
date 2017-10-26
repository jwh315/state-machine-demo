import React, { Component } from 'react';
import './css/App.css';
import Light from './components/Light';
import WalkSign from './components/WalkSign';
import { stateMachine } from './state';


class App extends Component {
  constructor(props) {
    super(props);

    this.initialTimer = 3;

    this.state = {
      state: stateMachine.initial,
      timer: this.initialTimer
    }
  }

  decrementTimer = () => {
    let timer = this.initialTimer;

    if (this.state.timer > 0) {
      timer = this.state.timer - 1;
    } else {
      this.transition();
    }

    this.setState({ timer });
  }

  transition = () => {
    const { state } = this.state;

    const transition = typeof state === 'object' && state.red !== 'wait' ? 'PED_TIMER' : 'TIMER';
    const newState = stateMachine.transition(state, transition).value;

    this.setState({ state: newState });
  }

  componentDidMount() {
    setInterval(this.decrementTimer, 1000);
  }

  render() {

    const { state, timer } = this.state;

    return (
      <div className="App">
        {timer}
        <Light state={state} />

        <WalkSign state={state} />
      </div>
    );
  }
}

export default App;
