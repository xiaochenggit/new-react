import React from 'react';

class CommentList extends React.Component {
	render(){
		var comments = this.props.comments;
		return(
			<div className='comment-list'>
			{comments.map((comment,index) => {
				return (
					<div className='comment-item' key={index}>
						<div className='name'>{comment.username}</div>
						<div className='content'>{comment.content}</div>
					</div>
				)
			})}
			</div>
		)
	}
}
export default CommentList;