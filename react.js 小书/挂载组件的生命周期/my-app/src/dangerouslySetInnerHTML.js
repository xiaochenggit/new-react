import React, { Component } from 'react';

class HTML extends  Component {
	constructor() {
		super();
		this.state = {
			content : '<div class="name">肖成</div>'
		}
	}
	render(){
		return (
			<div style={{color: 'red'}} dangerouslySetInnerHTML={{__html:this.state.content}}></div>
		)
	}
} 
export default HTML;
