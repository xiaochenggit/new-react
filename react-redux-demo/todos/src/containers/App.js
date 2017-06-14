import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo , completeTodo , setVisibilityFilter , VisibilityFilters} from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class App extends Component {

	render() {
		// App 接收 state 映射的对象 obj 中的属性和 dispath 传递给子组件
		const { dispatch , visibleTodos , visibilityFilter } = this.props;
		console.log(dispatch);
		function complete (index) {
			if (visibilityFilter === 'SHOW_ALL') {
				dispatch(completeTodo(index))
			}
		}
		return (
			<div className='container'>
				<AddTodo onAddClick={(text) => dispatch(addTodo(text))} />
				<TodoList todos={visibleTodos} 
				onTodoClick={(index) => complete (index)} />
				<Footer filter={visibilityFilter} 
				onFilterChange={(nextFilter) => dispatch(setVisibilityFilter(nextFilter))}/>
			</div>
		)
	}

}

// props 验证
App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}

// 过滤匹配显示待办
const selectTodos = (todos, filter) => {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL :
			return todos;
		case VisibilityFilters.SHOW_COMPLETED :
			return todos.filter((todo) => todo.completed);
		case VisibilityFilters.SHOW_ACTIVE :
			return todos.filter((todo) => !todo.completed);
			default: 
			return todos;
	}
}

/**
 * mapStateToProps 映射state
 * 
 * @param  state  [store里的state]
 * @return object [返回一个对象，把对象里面的参数以属性传送给App，以及附带一个 dispatch]
 */
const select = (state) => {
	return {
		visibleTodos: selectTodos(state.todos, state.visibilityFilter),
		visibilityFilter: state.visibilityFilter
	}
}

// 通过 connect(select)(App) 连接 store 和 App 容器组件
export default connect(select)(App);
