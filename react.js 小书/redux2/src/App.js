import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import logo from './logo.svg';
import Header from './header';
import Content from './content';
import './css/normalize.css'
import './css/App.css';

function createStore(reducer) {
  let state = null;
  const listeners = [];
  const subscribe = (listener) => listeners.push(listener);
  const getState = () => state;
  const dispath = (action) => {
    state = reducer(state, action);
    listeners.forEach( (listener) => listener() )
  }
  dispath({}); // 初始化 state
  return { getState, dispath, subscribe };
}

const themeReducer = (state, action) => {

  if (!state) {
    return {
      themeColor: 'red'
    }
  }

  switch (action.type) {
    case 'CHANG_COLOR':
      return { ...state, themeColor: action.themeColor}
      break;
    default:
      return state
      break;
  }
  
}

const store = createStore(themeReducer);

class App extends Component {

  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return { store }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
