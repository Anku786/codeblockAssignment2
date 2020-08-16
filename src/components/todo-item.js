import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
deleteItem(id){
    const list=[...this.props.todo];
    const newList=list.filter(todo=>todo.id ==id);
    this.setState({
        list : newList
    })
}

  render() {
    return (
      <li>
          {this.props.todo}
          <button onClick={()=>{
          this.deleteItem(this.props.todo.id)
        }}>Delete Todo</button>
      </li>
    );
  }
}

TodoItem.protoTypes = {
    todo : PropTypes.string,
    list : PropTypes.array
}

export default TodoItem