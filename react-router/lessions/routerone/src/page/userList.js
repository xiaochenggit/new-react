import React , { Component } from 'react'
import { Link } from 'react-router'
import Footer from './common/footer'
class UserList extends Component {
	constructor() {
		super();
		this.state = {
			persons:  [
				{id: 1, name: '肖成'},
				{id: 2, name: '赵强'},
				{id: 3, name: '李世雄'}
			]
		}
		this.handleAdd = this.handleAdd.bind(this);
	}
	handleAdd(event){
		event.preventDefault();
		var target = event.target;
		var id = target.elements[0].value;
		var name = target.elements[1].value;
		if (!id || !name) {
			alert('请输入正确的信息!');
			return;
		}
		var persons = this.state.persons;
		persons.push({id: id, name: name});
		this.setState({ persons });
		target.elements[0].value = "";
		target.elements[1].value = "";
	}
	render() {
		return (
			<div className="user-list">
				UserList
				<ul>
					{
						this.state.persons.map( (person, index) => <li key={index}><Link to={`/user/${person.id}`} activeClassName="active">{person.name}</Link></li>)
					}
				</ul>
				 <div>
			    	<form onSubmit={this.handleAdd}>
			    		<div>
			    			<label>id&nbsp;: <input name="id" id="id"/></label>
			    		</div>
			    		<div>
			    			<label>姓名: <input name="name" id="name"/></label>
			    		</div>
			    		<button type="submit">添加</button>
			    	</form>
			    </div>
				{this.props.children}
				<Footer />
			</div>
		)
	}
}

export default UserList;