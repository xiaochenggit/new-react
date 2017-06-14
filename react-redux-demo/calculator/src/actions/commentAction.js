export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

// 用户添加代办事项

export const addComment = (userName, message) => {
	return {
		type: ADD_COMMENT,
		userName,
		message
	}
}

export const deleteComment = (index) => {
	return {
		type: DELETE_COMMENT,
		index
	}
}