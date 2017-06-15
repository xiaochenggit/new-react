import React , { Component } from 'react';

class Page extends Component {

	handleClick(event) {
		event.preventDefault();
		this.props.ChangePage();
	}

	render() {
		return (
			<li className={ this.props.class } onClick={this.handleClick.bind(this)}>{this.props.pagenow}</li>
		)
	}

}

export default Page;