import React , { Component } from 'react';

class ChildrenProps extends Component {
	// componentDidMount() {
	// 	console.log(this.props.children.join('|'));
	// }

	render() {
		var childrenHTML = this.props.children.map( (item) => item )
		return(
			<div className='ChildrenProps'>
				ChildrenProps
				{childrenHTML}
			</div>
		)
	}

}

export default ChildrenProps;