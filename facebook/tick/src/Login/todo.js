import React , { Component } from 'react';

class ToDo extends Component {

	render() {
		return(
			<div className='todo' onClick={this.props.onClick}>{this.props.title}</div>
		)
	}

	animate() {
		console.log(`我也不知道在干嘛！${this.props.title}`)
	}
}

export default ToDo;