import React , { Component } from 'react';
import $ from 'jquery';

class Chosen extends Component {

	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		this.$select = $(this.select);
		this.$select.on('change',this.handleChange);
		this.$select.css('color','blue');
	}

	handleChange(event) {
		this.props.onChange(event.target.value);
	}

	render() {
		return (
			<div className='chosen' ref={ (select) => this.select = select } style={{color:'red'}}>
				<select>
					{this.props.children}
				</select>
			</div>
		)
	}

}

export default Chosen;