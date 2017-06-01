import React , { Component } from 'react';

class UseForm extends Component {

	constructor() {
		super();
		this.state = { 
			name: '',
			value: 'Please write an essay about your favorite DOM element.',
			select: 'coconut'
		};
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeText = this.handleChangeText.bind(this);
		this.handleChangeSelect = this.handleChangeSelect.bind(this);
		this.handleShowName = this.handleShowName.bind(this);
	}

	handleChangeName(event) {
		var name = event.target.value;
		this.setState({ name });
	}

	handleChangeText(event) {
		var value = event.target.value;
		this.setState({ value });
	}

	handleChangeSelect(event) {
		var select = event.target.value;
		this.setState({ select });
	}

	handleShowName(event) {
		console.log(`value ${this.state.value}`);
		console.log(`name ${this.state.name}`);
		console.log(`select ${this.state.select}`);
		event.preventDefault();
	}

	render() {
		var className = 'active ';
	    className += false?'online':'offline';
		return (
			<div className={className} onSubmit={this.handleShowName}>
				<form>
					<label> Name: <input type='text' onChange={this.handleChangeName} /></label>
					<textarea value={this.state.value} onChange={this.handleChangeText}></textarea>
					<select defaultValue={this.state.select} onChange={this.handleChangeSelect}>
						<option value="grapefruit">Grapefruit</option>
           				<option value="lime">Lime</option>
           				<option value="coconut">Coconut</option>
            			<option value="mango">Mango</option>
					</select>
					<button type='submit'>提交</button>
				</form>
			</div>
		)
	}

}

export default UseForm;