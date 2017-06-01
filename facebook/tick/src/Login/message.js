import React , { Component } from 'react';
import MessageButton from './messageButton';
class Message extends Component {
  	
	render() {
		return (
			<li title={this.props.message.author} > { this.props.message.text } <MessageButton>{this.props.message.author}</MessageButton></li>
		)
	}

}

export default Message;