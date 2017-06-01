import React , { Component } from 'react';

class ClickDemo extends Component {

	constructor() {
		super();
		this.state = {
			isLick : false
		}
		// 绑定
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		// 新方法
		this.setState(prevState => ({
      		isLick: !prevState.isLick
    	}));
    	// 阻止默认事件
    	event.preventDefault();
		//return false;
	}

	render() {
		return (
			<div className='click-demo'>
				<a href="#" onClick={this.handleClick}>
					{this.state.isLick?'不喜欢':'喜欢'}
				</a>
			</div>
		)
	}
}

export default ClickDemo;