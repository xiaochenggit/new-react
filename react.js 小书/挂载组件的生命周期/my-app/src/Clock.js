import React, { Component } from 'react';

class Clock extends Component {
	constructor() {
		super();
		this.state = {
			date :　new Date()
		}
	}
	componentWillMount(){
		this.timer = setInterval(()=>{
			this.setState({
				date : new Date()
			})
		})
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	render(){
		return(
			<div className='clock'>
				时间: {this.state.date.toLocaleTimeString()}
			</div>
		)
	}
}
export default Clock;