import React, { Component } from 'react';
import TodoComponent from './components/TodoComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddTaskComponent from './components/AddTaskComponent';
import { v4 as uuidv4 } from 'uuid';

import axios from 'axios';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        todos: [
            {
                id: uuidv4(),
                title: 'Title one',
                completed: false
            },
            {
                id: uuidv4(),
                title: 'Title Two',
                completed: false
            },
            {
                id: uuidv4(),
                title: 'Title Three',
                completed: false
            }
        ]
    }
}

addTodo = (title) => {
  const newTodo = {
      id: uuidv4(),
      title,
      completed: false
  }
  this.setState({
    todos: [...this.state.todos, newTodo]
  });
}

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      console.log(res.data);
      this.setState({
        todos: res.data
      });
  });
}

  render() {
    return (
      <div className="main">
        <HeaderComponent />
        <AddTaskComponent addTodo = {this.addTodo} />
        <TodoComponent todo = {this.state.todos}/>
        <FooterComponent />
      </div>
    );
  }
}

export default App;
