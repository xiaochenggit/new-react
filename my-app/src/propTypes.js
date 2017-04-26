import React, { Component } from 'react';

class PropTypes extends Component {
	propTypes: {
		title: React.PropTypes.string.isRequired;
	}
	render() {
		return (
			<h1>{this.props.title}</h1>
		)
	}
}

export default PropTypes;