import React , { Component } from 'react';
import { connect } from './connect';
import PropTypes from 'prop-types';
import ThemeSwitch from './themeSwitch';

class Content extends Component {

	static propTypes = {
		themeColor: PropTypes.string
	}

	render(){
		return (
			<div className='content'>
				<div className='content-main' style={{ color: this.props.themeColor }} > React 小书内容 </div>
				<ThemeSwitch/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}

Content = connect(mapStateToProps)(Content);

export default Content;