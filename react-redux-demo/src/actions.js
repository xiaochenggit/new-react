// actions 类型
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'CPMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// 过滤类型常量
export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
} 

// 用户添加代办项 action 函数
export const addTodo = (text) => {
	return {
		type: ADD_TODO,
		text
	}
}

// 用户点击触发完成 action 函数 index 具体待办项 id 
export const completeTodo = (index) => {
	return {
		type: COMPLETE_TODO,
		index
	}
}

// 用户过滤代办项 action 函数
export const setVisibilityFilter = (filter) => {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}