import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GetName extends Component {
	static propsTypes = {
		name : PropTypes.string
	}
	render() {
		return (
			<div className='get-name'>
				<h2>My name is {this.props.name}</h2>
			</div>
		)
	}
}

export default GetName;