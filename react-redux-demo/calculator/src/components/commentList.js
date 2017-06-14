import React , { Component } from 'react';
import Comment from './comment';

class CommentList extends  Component {

	render() {
		var commentList = this.props.comments;
		return(
			<div className='commentList'>
				{
					commentList.map((item, index) => 
						<Comment comment={item} key={index} ondeletecomment={() => this.props.onDelComment(index)}/>
					)
				}
			</div>
		)
	}
}

export default CommentList;