import React , { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

class Animation extends Component {

  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me']};
  }

  handleAdd() {
    const newItems = [prompt('Enter some text')].concat(this.state.items);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={ this.handleRemove.bind(this,i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd.bind(this)}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Animation;