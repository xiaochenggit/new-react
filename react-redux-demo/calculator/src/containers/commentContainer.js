import React , { Component } from 'react';
// import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import AddComment from '../components/addComment';
import CommentList from '../components/commentList';
import { addComment , deleteComment } from '../actions/commentAction';

class CommentApp extends Component {

	
	render() {
		const { onadd , commentARR , ondel} = this.props;
		return (
			<div className='commentDemo'>
				<AddComment onAddComment={onadd}/>
				<CommentList comments={commentARR} onDelComment={ondel}/>
			</div>
		)
	}

}

function mapStateToProps(state) {
  return {
    commentARR: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onadd: (userName,message) => dispatch(addComment(userName,message)),
    ondel: (index) => dispatch(deleteComment(index))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentApp);