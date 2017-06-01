import React , { Component } from 'react';
import Chosen from './chosen';

class Example extends Component {

	render() {
		return (
			<Chosen defaultValue='' onChange={ (value) => console.log(value) }>
				<option value='js'>Javascript</option>
				<option value='html'>HTML</option>
				<option value='react'>React</option>
				<option value='vue'>Vue</option>
				<option value='nodejs'>Node.Js</option>
			</Chosen>
		)
	}

}

export default Example;