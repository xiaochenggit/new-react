import React , { Component } from 'react';

class MarkDown extends Component {

	constructor() {
		super();
		this.state = { value: 'this is a MarkDown input '};
	}

	_getAfter() {
		var value = this.state.value;
		return value.replace(/`([\S\s]+?)`/g,'<code>$1</code>');
	}

	handleChange(event) {
		var target = event.target;
		this.setState({
			value : target.value
		})
		this._getAfter();
	}

	render() {
		return (
			<div className='MarkDown'>
				<h3>原始的</h3>
				<textarea defaultValue={this.state.value} onChange={this.handleChange.bind(this)}></textarea>
				<h3>之后的</h3>
				<div dangerouslySetInnerHTML={{__html: this._getAfter()}}></div>
			</div>
		)
	}	
}

export default MarkDown;