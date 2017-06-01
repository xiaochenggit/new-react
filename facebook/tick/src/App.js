import React, { Component } from 'react';

class Tick extends Component {

  constructor() {
    super();
    this.state = {
      date: new Date()
    }
  }

  tick() {
    this.setState({
      date : new Date()
    })
  }
  // 加载完成
  componentDidMount () {
    this.timer = setInterval(() => {
      this.tick();
    },1000)
  }
  // 移除之前
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  render() {
    return (
      <div className='tick1'>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Tick;
