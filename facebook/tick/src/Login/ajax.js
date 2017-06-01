import React , { Component } from 'react';
import $ from 'jquery';
class Ajax extends Component {

	constructor() {
		super();
		this.state = {
			username: '',
			lastGistUrl: ''
		}
	}

	componentDidMount() {
		this.serverRequest = $.get(this.props.source, (result) => {
			var result1 = result[0];
			this.setState({
				username: result1.owner.login,
				lastGistUrl: result1.owner.gists_url
			})
		})
	}

	render() {
		return (
			<div className='ajax'>
				{`username ${this.state.username} lastGistUrl ${this.state.lastGistUrl }`}
			</div>
		)	
	}
}

export default Ajax; 