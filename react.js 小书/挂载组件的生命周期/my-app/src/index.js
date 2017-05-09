import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Clock from './Clock';
import InputFocus from './inputFocus';
import Card from './card';
import HTML from './dangerouslySetInnerHTML';
import PropTypes from './propTypes'
import './index.css';
class Index extends React.Component {
	constructor() {
		super();
		this.state = {
			isShowHeader : true,
			isShowClock : true
		}
	}
	handleShowOrHide() {
		this.setState({
			isShowHeader: !this.state.isShowHeader
		})
	}
	handleShowOrHideClock() {
		this.setState({
			isShowClock: !this.state.isShowClock
		})
	}
	render(){
		return (
			<div className='main'>
				{this.state.isShowHeader?<Header />:null}
				<button onClick={this.handleShowOrHide.bind(this)}>{this.state.isShowHeader?'隐藏':'显示'}</button>
				<h2>时钟</h2>
				{this.state.isShowClock?<Clock /> : null}
				<button onClick={this.handleShowOrHideClock.bind(this)}>{this.state.isShowClock?'隐藏时钟':'显示时钟'}</button>
				<h2>InputFocus</h2>
				<InputFocus />
				<h2>this.props</h2>
				<Card>
					<h2 className='cardName'>肖成</h2>
					<div className='language'>js react jquery </div>
					<div className='say'><input/></div>
				</Card>
				<h2>html 渲染</h2>
				<HTML/>
				<h2>PropTypes</h2>
				<PropTypes comment={{'name':'xiaocheng','content':'My name is xiaocheng'}} name={{'name':'xiao'}}/>
			</div>
		)
	}
}
ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
