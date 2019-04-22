import React, { Component } from 'react';

class TodoItem extends Component {
  render() {   
    const {
      id,
      name,
      remove
    } = this.props;

    return (     
      <div>
        Todo: {id}: {name}

        <button onClick={() => remove(id)}>remove</button>
      </div>
    )
  }
}

export default TodoItem;