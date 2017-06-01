import React, { Component } from 'react';

class NoteList extends Component{
	render() {
		return(
			<ul> 
			{
				this.props.children.map( (item,index) => <li key={index}>{item}</li>)
			}
			</ul>
		);
	}
}
export default NoteList;