import React , { Component } from 'react';

class ColorDemo extends Component{

	constructor() {
		super();
		this.state = {
			color : 'red'
		};
		this.handleChangeColor = this.handleChangeColor.bind(this);
	}

	handleChangeColor(event) {
		this.setState({
			color: event.target.value
		})
	}

	render() {
		return (
			<div className='color-demo'>
				<h2>ColorDemo</h2>
				<p style={{ color: this.state.color }}>{this.state.color || 'white'}</p>
				<h3> 请选择颜色 </h3>
				<select defaultValue={this.state.color} onChange={this.handleChangeColor}>
					<option value='black'>黑色</option>
					<option value='yellow'>黄色</option>
					<option value='blue'>蓝色</option>
					<option value='red'>红色</option>
				</select>
				<p style={{color: this.state.color}}>{(()=>{
					switch (this.state.color) {
						case 'red':
							return '红色';
						case 'black':
							return '黑色';
						case 'blue':
							return '蓝色';
						case 'yellow':
							return '黄色';
						default:
							return '白色';
					}
				})()}</p>
			</div>
		)
	}

}

export default ColorDemo;