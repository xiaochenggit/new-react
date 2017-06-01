import React , { Component } from 'react';
import LoginButton from './Login/loginButton';
import LogoutButton from './Login/logoutButton';
class Logo extends Component {
	constructor() {
		super();
		this.state = {
			isLogo: false,
			logo: '登录',
			logout: '已登录'
		}
		this.handleLogout = this.handleLogout.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogout() {
		this.setState({ isLogo: false});
	}

	handleLogin() {
		this.setState({ isLogo: true});
	}

	render() {
		var button = '';
		if (this.state.isLogo) {
			button =  <LogoutButton onSubmit={this.handleLogout} name={this.state.logout}/>
		} else {
			button =  <LoginButton onSubmit={this.handleLogin} name={this.state.logo}/>
		}
		return (
			<div className='logo'>
				{button}
			</div>
		)
	}
}

export default Logo;