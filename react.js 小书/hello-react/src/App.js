import React from 'react';
import logo from './logo.svg';
import './App.css';
class CountAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : parseInt(this.props.count)
    }
  }
  handleChangeCount() {
    this.setState({
      count: this.state.count + 1 
    })
  }
  render() {
    return (
      <p>
        <button onClick={this.handleChangeCount.bind(this)}>
          {this.state.count}
        </button>
      </p>
    )
  }
}
const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]
class User extends React.Component {
  render() {
    var user = this.props.user;
    return(
      <div className='user'>
        <span>姓名: {user.name}</span>
        <span>年龄: {user.age}</span>
        <span>gender: {user.gender}</span>
      </div>
    )
  }
}
class UserList extends React.Component {
  render(){
    var Userlist = users.map((user,index) => <User user={user} key={index}/>)
    return (
      <div className='user-list'>
        {Userlist}
      </div>
    )
  }
}
class App extends React.Component {
  constructor () {
    super();
    this.state = {isLike: false};
    // this.handleChangeIsLike = this.handleChangeIsLike.bind(this);
  }
  handleChangeIsLike () {
    this.setState({
      isLike : !this.state.isLike
    })
  }
  render () {
    return (
      <div>
        <CountAdd count='10'/>
        <button onClick={this.handleChangeIsLike.bind(this)} >
        {this.state.isLike?'取消':'点赞'}👍
        </button>
        <UserList/>
      </div>
    )
  }
}

export default App;
