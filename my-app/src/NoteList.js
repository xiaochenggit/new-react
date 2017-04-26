import React, { Component } from 'react';

class NoteList extends Component{
	render() {
		return(
			<ul> 
			{
				React.Children.map(this.props.children,function (child){
					return <li>{child}</li>
				})
			}
			</ul>
		);
	}
}
export default NoteList;