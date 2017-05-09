import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    console.log('constructor');
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount (){
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    console.log('compontentWillUnmount');
  }
  render (){
    console.log('render');
    return (
      <div className='header'>
        <h1>My name is xiaocheng</h1>
      </div>
    )
  }
}

export default Header;
