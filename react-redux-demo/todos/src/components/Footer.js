import React , { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {

	handleClick(event, filter) {
		event.preventDefault();
		this.props.onFilterChange(filter);
	}

	// 渲染条件
	renderFilter(filter, name) {
		if (filter === this.props.filter) {
			return <span style={{color : 'red'}}>{name}</span>;
		} 
		return (
			<span onClick={(event) => this.handleClick(event,filter)}>
			{name}
			</span>
		)
	}

	render() {
		return (
			<div className='filter'>
				<p>
					展示 :
					{' '}
					{this.renderFilter('SHOW_ALL', '全部')}
					{' | '}
					{this.renderFilter('SHOW_COMPLETED', '已完成')}
					{' | '}
					{this.renderFilter('SHOW_ACTIVE', '未完成')}
				</p>
			</div>
		)
	}

}

// PropTypes 验证

Footer.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	filter: PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
	]).isRequired
}

export default Footer;