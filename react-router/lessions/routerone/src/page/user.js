import React , { Component } from 'react';
class User extends Component {
	render() {
		 return (
		 	<div className="user">
		 		<h3>User id is  {this.props.params.id}</h3>
		 	</div>
		 )
	}
}

export default User;