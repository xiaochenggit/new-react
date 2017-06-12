import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends Component {

	render() {
		return(
			<div className='todo-list'>
				{
					this.props.todos.map((todo, index) => 
						<Todo {...todo} key={index} 
						todoClick={() => this.props.onTodoClick(index) }/>
					)
				}
			</div>
		)
	}
	
}

// PropTypes 验证

TodoList.propTypes = {
	onTodoClick: PropTypes.func.isRequired,
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired,

}

export default TodoList;