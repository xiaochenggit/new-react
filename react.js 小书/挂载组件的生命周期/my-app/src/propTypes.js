import React, { Component } from 'react';

class PropTypes extends Component {
	render(){
		const { comment,name} = this.props;
		return (
			<div className='comment'>
				<h2 className='comment-user'>{comment.name}</h2>
				<div className='comment-content'>{comment.content}</div>
				<h2>{name.name}</h2>
			</div>
		)
	}
}

export default PropTypes;