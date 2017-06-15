import React , { Component } from 'react';

class Comment extends Component {

	handleClick(event){
		event.preventDefault();
		this.props.ondeletecomment();
	}

	componentDidMount() {
		let time = this.props.comment.createTime;
		this.inputTime.innerHTML = this.getTimeago(time);
		this.timer = setInterval(() => {
			let time = this.props.comment.createTime;
			this.inputTime.innerHTML = this.getTimeago(time);
		}, 5000)
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	getTimeago(t) { 
		let time = Math.round((new Date().getTime() - t) / 1000);
		if (!time) {
			return '1秒前';
		}
		return time >= 60 ? Math.ceil(time / 60) + '分钟前' : time + '秒前';  
	}

	render() {
		var comment = this.props.comment;
		return (
			<div className='comment'>
				<div className='commentUserName'>
					{comment.userName}
					<span className='commentTime' ref={(time) => {this.inputTime = time}}></span>
				</div>
				<div className='commentMessageBox'>
					{comment.message}
					<span className='deleteComment' 
					onClick={this.handleClick.bind(this)}>删除</span>
				</div>
			</div>
		)
	}

}

export default Comment;