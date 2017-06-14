import React , { Component } from 'react';

class AddComment extends Component {

	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		event.preventDefault();
		var userName = this.userName.value.trim();
		var message = this.message.value.trim();
		if (!userName || !message) {
			alert('请把信息填写完整');
			return false;
		}
		this.props.onAddComment(userName, message);
	}

	render() {
		return (
			<div className='addComment'>
				<form>
					<div className='addUserName'>
						<label>
							<span>用户名: </span>
							<input name='userName' 
							ref={ (input) => {this.userName = input} }/>
						</label>
					</div>
					<div className='addMessage'>
						<label>
							<span>用户名: </span>
							<input name='message' 
							ref={ (input) => this.message = input } />
						</label>
					</div>
					<button onClick={this.handleClick}>提交</button>
				</form>
			</div>
		)
	}

}

export default AddComment;