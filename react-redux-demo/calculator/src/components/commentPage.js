import React , { Component } from 'react';
import Page from './page'
class CommentPage extends Component {

	render() {
		var pagemax = this.props.commentPage.page_max;
		var pagenow = this.props.commentPage.page_now;
		var pagenum = this.props.commentPage.page_num;
		var style  = pagemax <= 1 ? { display:'none' } : {};
		var arr = [];
		for(var i = pagenow - 2; i <= pagenow + 2; i ++  ) {
			if (i>0 && i <= pagemax) {
				arr.push(i);
			}
		}
		return (
			<div className='commentPage'>
				<nav style={style}>
					<li>{pagenow}/{pagemax},每页{pagenum}条</li>
					<li onClick={() => this.props.onChangePage(pagenow - 1)}>«</li>
					{
						arr.map((item, index) => <Page class={item === pagenow ? 'active' : ''} pagenow={item} key={index} ChangePage={() => this.props.onChangePage(item)}/>)
					}
					<li onClick={() => this.props.onChangePage(pagenow + 1)}>»</li>
				</nav>
			</div>
		)
	}
	
}

export default CommentPage;