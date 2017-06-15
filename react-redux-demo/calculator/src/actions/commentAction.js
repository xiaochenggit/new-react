export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const PAGE = {
	Page_NUM : 5,
    Page_NOW : 1,
    Page_MAX : 1
}

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

export const changePage = (index) => {
	return {
		type: CHANGE_PAGE,
		index
	}
}