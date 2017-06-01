import React , { Component } from 'react';
import PropTypes from 'prop-types';
class MessageButton extends Component {

	render() {
		return (
			<button style={{ backgroundColor: this.context.color  }}>{this.props.children}</button>
		)
	}

}

MessageButton.contextTypes = {
	color: PropTypes.string
}

export default MessageButton;