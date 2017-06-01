import React , { Component } from 'react';
import PropTypes from 'prop-types';

class WordList extends Component {

	render() {
		return (
			<div className='word-list'>
				<ul>
					{ this.props.words.map( (item,index) => <li title={item} key={index} >{item}</li> ) }
				</ul>
			</div>
		)
	}

}

WordList.propTypes = {
	words: PropTypes.array
}

export default WordList;