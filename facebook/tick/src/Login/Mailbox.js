import React , { Component } from 'react';

class MailBox extends Component {

	render() {
		var messages = this.props.messages;
		return(
			<div>
				<h2>MailBox</h2>
				{ messages.length > 0 && <h2>{messages} {messages.length}</h2>}
			</div>
		)
	}
}

export default MailBox;