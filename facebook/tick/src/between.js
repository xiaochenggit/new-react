import React , { Component } from 'react';

class BetWeen extends Component {

	hanldeClick(props,i) {
		console.log(`你点击的是${props[i]}`);
	}

	render() {
		var items = this.props.items.map( (item,i) => <div onClick={this.hanldeClick.bind(this,this.props.items,i)} key={i} >{item}</div>);
		return (
			<div className='BetWeen'>
				{items}
			</div>
		)
	}

}

export default BetWeen;