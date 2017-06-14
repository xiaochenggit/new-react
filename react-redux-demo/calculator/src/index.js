import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import commentAppRe from './reducers/commentReducer';
import CommentApp from './containers/commentContainer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(commentAppRe);

ReactDOM.render(
	<Provider store={store}>
		<CommentApp/>
	</Provider >
	, document.getElementById('root'));
registerServiceWorker();
