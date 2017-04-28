import React, { Component } from 'react';
import CommentInput from './commentinput.js';
import CommentList from './commentlist.js';
import './App.css';
const comments = [
    {username: 'Jerry', content: 'Hello'},
    {username: 'Tomy', content: 'World'},
    {username: 'Lucy', content: 'Good'}
]
class Comment extends Component {
  constructor () {
    super();
    this.state = {
      comments : comments
    }
  }
  handleSubmit(comment){
    if (!comment.username) {
      return alert('请输入用户名');
    }
    if (!comment.content) {
      return alert('请输入评论内容');
    }
    comments.push(comment);
    this.setState({
      comments : comments
    })
  }
  render(){
    return (
      <div className='comment'>
        <CommentInput onsubmit={this.handleSubmit.bind(this)}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

export default Comment;
