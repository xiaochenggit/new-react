import React from 'react';
import ReactDOM from 'react-dom';
import Tick from './App';
import ClickDemo from './click';
import Logo from './logo';
import MailBox from './Login/Mailbox';
import UseMap from './UseMap';
import UseForm from './UseForm';
import UseRef from './UseRef';
import WordAdder from './WordAdder';
import MessageList from './MessageList';
import ColorDemo from './colorDemo';
import ChildrenProps from './childrenProps';
import AddEventListener from './addEventListener';
import Ajax from './Login/ajax';
import BetWeen from './between';
import ToDos from './todos';
import Animation from './animation';
import Example from './example';
import './index.css';
const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <div className='main'>
  	<h2>时钟</h2>
  	<Tick />
  	<h2>事件</h2>
  	<ClickDemo />
  	<h2>条件渲染</h2>
  	<Logo />
  	<MailBox messages={messages}/>
  	<h2>Map的使用</h2>
  	<UseMap />
  	<h2>Form表单的使用</h2>
  	<UseForm />
  	<h2>ref 的使用</h2>
  	<UseRef />
  	<WordAdder />
    <h2>Use Context </h2>
    <MessageList />
    <ColorDemo />
    <h2>ChildrenProps</h2>
    <ChildrenProps><span>1</span><div>2</div></ChildrenProps>
    <h2>添加事件</h2>
    <AddEventListener />
    <h2>Ajax 应用</h2>
    <Ajax source='https://api.github.com/users/octocat/gists' />
    <h2>循环点击按钮</h2>
    <BetWeen items={['javascript','html','jquery','react','angularjs','nodejs']}/>
    <h2>todos</h2>
    <ToDos />
    <h2>Animation</h2>
    <Animation/>
    <h2>Jquery dom操作</h2>
    <Example />
  </div>,
  document.getElementById('root')
);
