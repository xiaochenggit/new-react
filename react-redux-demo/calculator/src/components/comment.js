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
		}, 200)
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}
	/**
	 * [getTimeago 返回时间过去的字符串  例 3小时前]
	 * @param  {[Number]} t [时间戳]
	 * @return {[string]}   [时间过去的字符串]
	 */
	getTimeago(t) { 
		let time = Math.round((new Date().getTime() - t) / 1000);
		if (!time) {
			return '刚刚';
		}
		if (time > 60 * 60 ) {
			return Math.floor(time / (60 * 60)) + '小时前';
		}
		return time >= 60 ? Math.floor(time / 60) + '分钟前' : time + '秒前';  
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