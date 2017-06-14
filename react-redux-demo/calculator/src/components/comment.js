import React , { Component } from 'react';

class Comment extends Component {

	handleClick(event){
		event.preventDefault();
		this.props.ondeletecomment();
	}

	render() {
		var comment = this.props.comment;
		return (
			<div className='comment'>
				<div className='commentUserName'>
					{comment.userName}
				</div>
				<div className='commentMessageBox'>
					{comment.message}
					<span className='commentTime'>{comment.createTime}</span>
					<span className='deleteComment' 
					onClick={this.handleClick.bind(this)}>删除</span>
				</div>
			</div>
		)
	}

}

export default Comment;