import React , { Component } from 'react';

class ToDo extends Component {
	
	constructor() {
		super();
		this.state = {
			items: []
		}
	}

	componentWillMount() {
		this._getItem();
	}

	_getItem() {
		var items = JSON.parse(localStorage.getItem('ToDoItems'));
		if (items) {
			this.setState({
				items: items
			})
		}
	}

	_savaItem() {
		var items = this.state.items;
		localStorage.setItem('ToDoItems', JSON.stringify(items));
	}

	handleSubmit() {
		var value = this.refs.input.value.trim();
		if (!value) {
			alert('请输入内容');
		}
		var items = this.state.items;
		items.push(value);
		this.setState({ items: items});
		this._savaItem();
		this.refs.input.value ='';
	}

	render() {
		return (
			<div className='todo'>
				<ul className='todolist'>
					{ this.state.items.map((item,key) => {
						return <li key={key}>{item}</li>
					})}
				</ul>
				<from>
					<input type='text' ref='input'/>
					<button onClick={this.handleSubmit.bind(this)}>ToDo{this.state.items.length + 1}</button>
				</from>
			</div>
		)
	}
}

export default ToDo;