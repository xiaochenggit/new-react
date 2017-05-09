import React from 'react';

class CommentInput extends React.Component {
  constructor() {
  	super();
  	this.state = {
  		username : '',
  		content : ''
  	}
  	this.handleUserChange = this.handleUserChange.bind(this);
    this.handleConChange = this.handleConChange.bind(this);
  }
  handleUserChange(event){
  	this.setState({
  		username : event.target.value
  	});
  }
  _saveUserName() {
    localStorage.setItem('username',this.state.username);
  }
  handleConChange(event){
    this.setState({
      content : event.target.value
    });
  }
  componentDidMount() {
    this.textarea.focus();
    var username = localStorage.getItem('username');
    if (username) {
      this.setState({
        username: username
      })
    }
    if (!username) {
      this.input.focus();
    }
  }
  submitMessage(event){
    if (this.props.onsubmit) {
      this.props.onsubmit({
        username : this.state.username,
        content: this.state.content,
        createTime: Date.now()
      })
    };
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div className='comment-input'>
      	<form>
      		<div>
      			<label>
      				<span>姓名: </span>
      				<input onChange={this.handleUserChange} value={this.state.username} onBlur={this._saveUserName.bind(this)} ref={(input)=>this.input = input}/>
      			</label>
      		</div>
      		<div>
      			<label>
      				<span>评论内容: </span>
      				<textarea onChange={this.handleConChange} value={this.state.content} ref={(textarea)=>this.textarea = textarea}/>
      			</label>
      		</div>
      		<span  onClick={this.submitMessage.bind(this)}>提交</span>
      	</form>
      </div>
    )
  }
}
export default CommentInput