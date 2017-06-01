import React from 'react';
import ReactDOM from 'react-dom';
import {Router , hashHistory , IndexRoute , Route} from 'react-router';
import App from './App';
import Home from './page/home';
import About from './page/about';
import UserList from './page/userList';
import User from './page/user';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// const routes = {
// 	path: '/',
// 	component : App,
// 	indexRoute: {component: Home},
// 	childRoutes: [
// 		{path: '/home', component: Home},
// 		{path: '/about', component: About},
// 		{path: '/userlist', component: UserList},
// 		{path: '/userlist/user/:id', component: User}
// 	]
// }

ReactDOM.render((
		<Router history={hashHistory}>
		    <Route path="/" component={App}>
		      <IndexRoute component={Home} />
		      <Route path="/home" component={Home}/>
		      <Route path="/about" component={About}/>
		      <Route path="/userlist" component={UserList}>
		      	<Route path="/user/:id" component={User} />
		      </Route>
		    </Route>
		</Router>
	), document.getElementById('root'));
registerServiceWorker();
