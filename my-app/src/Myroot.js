import React, { Component } from 'react';

class App extends Component {
  render() {
    var text = new Date().toLocaleTimeString();
    function tick(){
      text = new Date().toLocaleTimeString();
    }
    setInterval(tick,1000);
    return (
      <div className='xiaocheng'>{text}</div>
    );
  }
  
}

export default App;
