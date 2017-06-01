import React , { Component } from 'react';

class LoginButton extends Component {
	render() {
		return(
			<button onClick={this.props.onSubmit}>{this.props.name}</button>
		)
	}
}

export default LoginButton;