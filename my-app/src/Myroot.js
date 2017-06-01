import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date : new Date().toLocaleTimeString()
    }
  }

  tick() {
    var date = new Date().toLocaleTimeString();
    this.setState({ date });
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000)
  }
  
  render() {
    return (
      <div className='xiaocheng'>{this.state.date}</div>
    );
  }
  
}

export default App;
