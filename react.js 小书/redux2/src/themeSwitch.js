import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from './connect';

class ThemeSwitch extends Component {

	static propTypes = {
		themeColor: PropTypes.string,
		onSwitchColor : PropTypes.func
	}

	hanldeSwitchColor(color) {
		if (this.props.onSwitchColor) {
			this.props.onSwitchColor(color);
		}
	}
	render() {
		return (
			<div className='themeSwitch'>
				<button style={{ color: this.props.themeColor }} onClick={this.hanldeSwitchColor.bind(this, 'red')}>red</button>
				<button style={{ color: this.props.themeColor }} onClick={this.hanldeSwitchColor.bind(this, 'blue')}>blue</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }
}

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch;