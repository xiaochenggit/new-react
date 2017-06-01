import React , { Component } from 'react';

class LogoutButton extends Component {
	render() {
		return (
			<button onClick={this.props.onSubmit}>{this.props.name}</button>
		)
	}
}

export default LogoutButton;