import React , { Component } from 'react';
import Map from './Login/Map';

class UseMap extends Component {

	render() {
		const posts = [
		  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
		  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
		];
		return(
			<div className='use-map'>
				<Map posts={posts}/>
			</div>
		)
	}

}

export default UseMap;