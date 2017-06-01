import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Login/message';

class MessageList extends Component {

	getChildContext() {
		return {
			color: 'red'
		}
	}
	constructor() {
		super();
		this.state = {
			messages : [{
				text: '我是李白',
				author: '李白'
			},{
				text: '我是杜甫',
				author: '杜甫'
			},{
				text: '我是李商隐',
				author: '李商隐'
			}]
		}
	}

	render() {
		return (
			<div className='message-list'>
				<ul>{ this.state.messages.map( (message,index) => <Message key={index} message={message} /> ) }</ul>
			</div>
		)
	}

}

MessageList.childContextTypes = {
	color: PropTypes.string
}

export default MessageList;