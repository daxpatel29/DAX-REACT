import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  inc = () => {
    this.setState((num) => ({
      count: num.count + 1,
    }));
  };
  dec = () => {
    this.setState((num) => ({
      count: num.count - 1,
    }));
  };
  render() {
    return (
      <div>
        <h3>COUNTER</h3><br />
        <button onClick={this.dec}>-</button>
        <button>{this.state.count}</button>
        <button onClick={this.inc}>+</button>
      </div>
    );
  }
}

export default Counter;

