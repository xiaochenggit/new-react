import React, { Component } from 'react';
import logo from './logo.svg';
import Myroot from './Myroot';
import Hello from './hello';
import NoteList from './NoteList';
import PropTypes from './propTypes';
import getDefaultProps from './getDefaultProps';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="ahtor">
          <Myroot/>
          <Hello name='xiaocheng'/>
        </div>
        <NoteList>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </NoteList>
        <PropTypes title='my name is xiaocheng'/>
        <getDefaultProps title = 'da'/>
      </div>
    );
  }
}

export default App;
