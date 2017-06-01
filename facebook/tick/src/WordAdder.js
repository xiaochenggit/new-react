import React , { Component } from 'react';
import WordList from './Login/wordlist';
class WordAdder extends Component {

	constructor() {
		super();
		this.state = {
			words:['javascript']
		}
		this.handleAddWord = this.handleAddWord.bind(this);
	}

	handleAddWord(event) {
		var word = this.inputWord.value.trim();
		if (!word) {
			alert('课程不能为空')
			return;
		}
		var words = this.state.words;
		words.push(word);
		this.setState({ words });
		event.preventDefault();
		this.inputWord.value = '';
		this.inputWord.focus();
	}

	render() {
		return(
			<div className='word-adder'>
				<h2>请输入你要添加的科目</h2>
				<form>
					<input type='text' ref={ (input) => this.inputWord = input } />
					<button onClick={this.handleAddWord}>Add Word</button>
					<WordList words={this.state.words} />
				</form>
			</div>
		)
	}
}

export default WordAdder;