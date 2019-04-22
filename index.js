import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoListComponent from './components/todo/TodoList';

class App extends Component {
  render() {
    return ( // jsx
      <div>
        My App

        <TodoListComponent />
      </div>
    )
  }
}

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));