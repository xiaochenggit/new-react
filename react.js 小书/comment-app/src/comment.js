import React, { Component } from 'react';
import CommentInput from './commentinput.js';
import CommentList from './commentlist.js';
import './App.css';
class Comment extends Component {
  constructor () {
    super();
    this.state={
      comments : []
    }
  }
  handleSubmit(comment){
    if (!comment.username) {
      return alert('请输入用户名');
    }
    if (!comment.content) {
      return alert('请输入评论内容');
    }
    const comments=this.state.comments;
    comments.push(comment);
    this.setState({ comments });
    this._saveComments(comments);
  }
  _saveComments(comments){
    localStorage.setItem('comments',JSON.stringify(comments))
  }
  _loadComments(){
    var comments=localStorage.getItem('comments');
    if (comments) {
      comments=JSON.parse(comments);
      this.setState({ comments });
    }
  }
  componentWillMount() {
    this._loadComments();
  }
  handleDeleteComment(index){
    var comments = this.state.comments;
    comments.splice(index, 1);
    this.setState({ comments });
    this._saveComments(comments);
  }
  render(){
    var list = this.state.comments.map((comment,index) => <CommentList comment={comment} key={index} onDeleteComment={this.handleDeleteComment.bind(this)} index={index} />)
    return (
      <div className='comment'>
        <CommentInput onsubmit={this.handleSubmit.bind(this)}/>
        <div className='comment-list'>
            {list}
        </div>
      </div>
    )
  }
}

export default Comment;
