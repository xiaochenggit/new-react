import React , { Component } from 'react';
import ToDo from './Login/todo'

class ToDos extends Component {

	constructor() {
		super();
		this.state = {
			items : ['javascript','jquery','html','Node.Js']
		}
	}

	handleClick(index) {
		var items = this.state.items.filter( (item,i) => index !== i);

		this.setState({items}, () => {
			if (items.length === 1) {
				this.refs.item0.animate();
			}
		})
	}

	render() {
		return(
			<div className='todos'>
				{ this.state.items.map( (item, i) => 
					<ToDo title={item} key={i} ref={'item' + i} onClick={this.handleClick.bind(this,i)}/>
				)}
			</div>
		)
	}
}

export default ToDos;