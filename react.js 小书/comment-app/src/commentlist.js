import React from 'react';
import PropTypes from 'prop-types';

class CommentList extends React.Component {
	constructor() {
		super();
		this.state = {
			timeString: ''
		}
	}
	componentWillMount() {
		this._updateTime();
		this.timer = setInterval(()=> {
			this._updateTime()
		},5000);
	}
	_updateTime(){
		var comment = this.props.comment;
		var time = comment.createTime;
		var newTime = (Date.now() - time)/1000
		this.setState({
			timeString: newTime >= 60 ? `${Math.round(newTime / 60)} 分钟前` : `${Math.round(Math.max(newTime,1))} 秒前` 
		})
	}
	handleDelete(){
		if (this.props.onDeleteComment) {
			this.props.onDeleteComment(this.props.index)
		}
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	_getProcessedContent (content) {
	    return content
	      .replace(/&/g, "&amp;")
	      .replace(/</g, "&lt;")
	      .replace(/>/g, "&gt;")
	      .replace(/"/g, "&quot;")
	      .replace(/'/g, "&#039;")
	      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  	}
	render(){
		var comment = this.props.comment;
		return(
			<div className='comment-item'>
				<div className='name'>{comment.username}</div>
				<div className='content' dangerouslySetInnerHTML={{
					__html : this._getProcessedContent(comment.content)
				}}></div>
				<div className='time'>{this.state.timeString}</div>
				<button onClick={this.handleDelete.bind(this)}>删除</button>
			</div>
		)
	}
}
CommentList.propTypes = {
	comment: PropTypes.object
}
export default CommentList;