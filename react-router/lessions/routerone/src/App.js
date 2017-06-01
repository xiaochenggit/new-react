import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
      	<div className="nav">
	      	<ul>
	      		<li><Link to="/home" activeClassName="active" >首页</Link></li>
	      		<li><Link to="/about" activeClassName="active" >关于</Link></li>
	      		<li><Link to="/userlist" activeClassName="active" >用户列表</Link></li>
	      	</ul>
	    </div>
	    {this.props.children}
      </div>
    );
  }
}

export default App;
