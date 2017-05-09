import React , { Component } from 'react';
import { connect } from './connect';
import PropTypes from 'prop-types';

class Header extends Component {

	static propTypes = {
		themeColor: PropTypes.string
	}

	render(){
		return(
			<h1 style={{ color: this.props.themeColor }}>hello React 小书</h1>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}

Header = connect(mapStateToProps)(Header);

export default Header;