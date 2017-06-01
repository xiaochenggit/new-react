import React , { Component } from 'react';

class Timer extends Component {
	
	constructor() {
		super();
		this.state = {
			count : 0
		}
	}

	_tick() {
		this.setState({
			count: this.state.count + 1
		})
	}

	componentDidMount() {
		this.timer = setInterval( () => {
			this._tick()
		},1000)
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}
	render() {
		return (
			<div className='timer'>
				{this.state.count}
			</div>
		)
	}
}

export default Timer;