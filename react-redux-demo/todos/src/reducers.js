/**
 * reducer 是纯方法
 * 传入旧状态 和 action
 * 返回新状态
 */
import { combineReducers } from 'redux';
import { VisibilityFilters , ADD_TODO , COMPLETE_TODO , SET_VISIBILITY_FILTER } from './actions';

// 过滤响应
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL , action) => {

	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state;
	}

}
function getStateTodos () {
	return JSON.parse(localStorage.getItem('todos'));
} 
// 待办项响应
const todos = (state = getStateTodos() , action ) => {

	switch (action.type) {
		case ADD_TODO:
			var todos = [
				...state,
				{
					text: action.text,
					completed: false
				}
			];
			localStorage.setItem('todos',JSON.stringify(todos));
			return todos;
		case COMPLETE_TODO:
			var todos1 = [
				// 点击位置之前
				...state.slice(0, action.index),
				// 点击位置
				Object.assign({}, state[action.index], {
					completed: !state[action.index].completed
				}),
				// 点击位置之后
				...state.slice(action.index + 1)
			];
			localStorage.setItem('todos',JSON.stringify(todos1));
			return todos1;
		default:
			return state;
	}

}

// 不同响应合并成一个 reducer 
const todoApp = combineReducers({
	visibilityFilter,
	todos
})

export default todoApp;