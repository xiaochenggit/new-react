import { combineReducers } from 'redux';
import { ADD_COMMENT , DELETE_COMMENT } from '../actions/commentAction';

const comments = (state = [], action) => {
	switch (action.type) {

		case ADD_COMMENT:
			return  [
		        ...state,
		        {
		         	userName: action.userName,
					message: action.message,
					createTime: new Date().getTime()
		        }
		      ];
		case DELETE_COMMENT :
			var arr = [];
			state.map((todo, index) => {
				if (index !== action.index) {
					arr.push(todo);
				}
			})
			return arr;
		default:
			return state
	}

}

const commentAppRe = combineReducers({
  comments
})

export default commentAppRe;