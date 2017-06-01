import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GetName extends Component {
	render() {
		return (
			<div className='get-name'>
				<h2>My name is {this.props.name.name}</h2>
			</div>
		)
	}
}
GetName.propTypes = {
  name: PropTypes.object
};

export default GetName;