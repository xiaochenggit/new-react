import React,{ Component } from 'react';

class InputFocus extends Component {
	componentDidMount() {
		this.input.focus();
	}
	render(){
		return (
			<div className='inputFocus'>
				<input ref={(input) => this.input = input }/>
			</div>
		)
	}
}
export default InputFocus;