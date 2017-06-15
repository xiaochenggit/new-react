import { combineReducers } from 'redux';
import { ADD_COMMENT , DELETE_COMMENT , CHANGE_PAGE , PAGE } from '../actions/commentAction';

const commentsName = 'comments';
function saveComments(comments) {
	localStorage.setItem(commentsName,JSON.stringify(comments));
}

function getComments() {
	let comments = JSON.parse(localStorage.getItem(commentsName));
	if (!comments) {
		return [];
	}
	return comments;
}

const userName = 'commentUserName'
function saveUserName(name) {
	localStorage.setItem(userName,name);
}

const comments = (state = getComments(), action) => {
	switch (action.type) {
		case ADD_COMMENT:
			var arr1 =  [
				{
		         	userName: action.userName,
					message: action.message,
					createTime: new Date().getTime()
		        },
		        ...state
		      ];
		     saveUserName(action.userName);
		     saveComments(arr1);
		     return arr1;
		case DELETE_COMMENT :
			var arr = [];
			state.forEach((todo, index) => {
				if (index !== action.index) {
					arr.push(todo);
				}
			})
			saveComments(arr);
			return arr;
		default:
			return state
	}

}

const page = (state = PAGE, action) => {
	switch (action.type) {
		case CHANGE_PAGE:
			return Object.assign({}, state, {
        		Page_NOW: action.index
      		});
		default:
			return state;
	}
}

const commentAppRe = combineReducers({
  comments,
  page
})

export default commentAppRe;