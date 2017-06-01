import React , { Component } from 'react';

class UseRef extends Component {
	constructor() {
		super();
		this.handleShowValue = this.handleShowValue.bind(this);
	}

	handleShowValue(event) {
		alert(this.inputValue.value);
		event.preventDefault();
	}
	render() {
		return(
			<div className='use-ref'>
				<input defaultValue='我是默认的' ref={ (input) => this.inputValue = input }/>
				<button onClick={this.handleShowValue}>show Value</button>
			</div>
		)
	}
}

export default UseRef;