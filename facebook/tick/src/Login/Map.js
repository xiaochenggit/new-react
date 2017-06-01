import React , { Component } from 'react';

class Map extends Component {

	render(){
		var posts = this.props.posts;
		var HTMLList = posts.map(
			(item,index) => <li title={item.title} key={item.id}>{item.content}</li>
		)
		return (
			<ul className='map'>
				{HTMLList}
			</ul>
		)  
	}

}

export default Map;