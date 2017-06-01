import React , { Component } from 'react';

class AddEventListener extends Component {

	constructor() {
		super();
		this.state = {
			width : window.innerWidth
		}
		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize',this.handleResize)
	}

	handleResize() {
		this.setState({
			width : window.innerWidth
		})
	}

	componentWillUnmount() {
		window.removeEventListener('resize',this.handleResize);
	}

	render() {
		return (
			<div className='addEventListener'>
				{`当前屏幕宽度${this.state.width}`}
			</div>
		)
	}

} 

export default AddEventListener;