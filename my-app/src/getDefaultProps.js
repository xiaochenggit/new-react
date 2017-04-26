import React, { Component } from 'react';

class getDefaultProps extends Component {
	getDefaultProps() {
		return {
			title : 'hello world'
		}
	}
	render() {
		return (
			<h1>{this.props.title}</h1>
		)
	}	
}

export default getDefaultProps;