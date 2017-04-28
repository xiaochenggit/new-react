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
  handleConChange(event){
    this.setState({
      content : event.target.value
    });
  }
  submitMessage(event){
    if (this.props.onsubmit) {
      const { username , content } = this.state;
      this.props.onsubmit({ username , content })
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
      				<input onChange={this.handleUserChange} value={this.state.username}/>
      			</label>
      		</div>
      		<div>
      			<label>
      				<span>评论内容: </span>
      				<textarea onChange={this.handleConChange} value={this.state.content}/>
      			</label>
      		</div>
      		<span  onClick={this.submitMessage.bind(this)}>提交</span>
      	</form>
      </div>
    )
  }
}

export default CommentInput