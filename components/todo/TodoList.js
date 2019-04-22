import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './TodoItem';
import { TODO_ACTION } from './redux/action';

import './TodoList.css';

class TodoList extends Component {

  state = {
    // items: [], // { id:, name: }
    todoName: '',
  }

  addTodo = () => {
    // const { 
    //   items = []
    // } = this.state;

    // const newTodo = {
    //   id: items.length + 1,
    //   name: this.state.todoName
    // }

    // // this.setState({
    // //   items: [...this.state.items, newTodo],
    // //   todoName: ''
    // // })

    // this.props.addNewTodo(newTodo);
    debugger

    const {
      dispatch
    } = this.props;

    const action = {
      type: 'ADD_TODO',
      payload: {
        name: 'New todo'
      }
    };

    dispatch(action);
  }

  setTodoName = ({ target: { value } }) => {
    this.setState({
      todoName: value
    })
  }

  removeTodo = (id) => {
    console.log(`removing todo ${id}`)
    const {
      items
    } = this.state;

    const newTodos = items.filter(x => x.id !== id);
    this.setState({
      items: newTodos
    })
  }

  render() {

    const {      
      todoName
    } = this.state;

    const{
      list: items
    } = this.props;

    console.log("todo list", items);

    return (     
      <div>
        <h2>Todo list</h2>
        <div>
          <input placeholder='New todo' className='mr' value={todoName} onChange={this.setTodoName} />
          <button onClick={this.addTodo}>Add todo</button>

          {items.map(({ id, name }) => <Todo key={id} id={id} name={name} remove={this.removeTodo} />)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  debugger
  return {
    list: state.todo.list
  }
}

// const mapDispatchToProps = dispatch => ({
//     addNewTodo: (todo) => {
//         dispatch({
//             type: TODO_ACTION.ADD_TODO,
//             payload: todo
//         });
//     }
// });

export default connect(mapStateToProps)(TodoList);

// export default TodoList;