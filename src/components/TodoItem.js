import React, { Component } from 'react';

class TodoItem extends Component {
    getStyle = () => {
        if(this.props.todo.completed) {
            return {
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
    }
    render() {
        let {id, name, username} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' /> {' '}
                    {name} - {username}
                    <button style={styles}>X</button>
                </p>
            </div>
        );
    }
}

const styles = {
    float: 'right'
};

export default TodoItem;