import React , { Component } from 'react';
// import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import AddComment from '../components/addComment';
import CommentList from '../components/commentList';
import CommentPage from '../components/commentPage';
import { addComment , deleteComment , changePage} from '../actions/commentAction';

class CommentApp extends Component {

	render() {
		const { onadd , commentARR , ondel , onchangepage} = this.props;
		return (
			<div className='commentDemo'>
				<AddComment onAddComment={onadd}/>
				<CommentList comments={commentARR.comments} onDelComment={ondel}/>
				<CommentPage commentPage= {commentARR.commentPage} onChangePage={onchangepage}/>
			</div>
		)
	}

}
/**
 * [getComments 获得]
 * @type {Object}
 */
function getComments(arr,page) { 

	var arr1 = arr;
	let page_num = page.Page_NUM;
	let page_max = Math.ceil( arr1.length / page.Page_NUM );
	let page_now = page.Page_NOW;
	console.log(page_now);
	if (page_now > page_max) {
		page_now = page_max;
	}
	if (page_now < 1) {
		page_now = 1;
	}
	return {
		comments : arr1.slice((page_now - 1) * page_num, page_now * page_num),
		commentPage: {
			page_max : page_max,
			page_now : page_now,
			page_num : page_num
		}
	}
}

function mapStateToProps(state) {
  return {
    commentARR: getComments(state.comments ,state.page)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onadd: (userName,message) => dispatch(addComment(userName,message)),
    ondel: (index) => dispatch(deleteComment(index)),
    onchangepage: (index) => dispatch(changePage(index))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentApp);