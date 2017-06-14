import React , { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {

	handleClick(event) {
		event.preventDefault();
		const text = this.input.value.trim();
		if (!text) {
			alert('请输入要添加的内容');
			return false;
		}
		this.props.onAddClick(text);
		this.input.value = '';
	}

	render() {
		return(
			<div className='todo-add'>
				<input type='text' ref={(input) => this.input = input}
				 placeholder='请输入要添加的内容' />
				<button onClick={this.handleClick.bind(this)}>添加代办事项</button>
			</div>
		)
	}
	
}

// props 验证

AddTodo.propTypes = {
	onAddClick: PropTypes.func.isRequired
}

export default AddTodo;