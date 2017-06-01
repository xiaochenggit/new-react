import React, { Component } from 'react';
import GetName from './getName';
import Timer from './timer';
import ToDo from './todo';
import MarkDown from './markdown';
import './App.css'

class App extends Component {
  render() {
    return (
       <div className='app'>
        <GetName name={{'name': 'xiaocheng'}}/>
        <GetName name={{'name': 'zhaoqiang'}}/>
        <Timer/>
        <h2>ToDo</h2>
        <ToDo/>
        <h2>MarkDown</h2>
        <MarkDown/>
       </div>
    );
  }
}

export default App;
