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

	componentDidMount() {
		var self = this;
		this.todolist.addEventListener('click', function(event){
			var target = event.target;
			var index = target.getAttribute('data-index');
			var items = self.state.items;
			items.splice(index, 1);
			self.setState({ items: items});
			self._savaItem();
		}, false)
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
		console.log(this.refs.input);
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
				<ul className='todolist' ref={(todolist) => this.todolist = todolist}>
					{ this.state.items.map((item,key) => {
						return <li key={key} data-index={key} >{item}</li>
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