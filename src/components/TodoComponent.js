import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoComponent extends Component {
    render() {
        return this.props.todo.map(todo => (
            <TodoItem delTodo={this.props.delTodo} changeHandler = {this.props.changeHandler} key={todo.id} todo={todo}/>
        ));
    }
}

export default TodoComponent;