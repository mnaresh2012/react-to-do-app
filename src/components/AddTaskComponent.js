import React, { Component } from 'react';

class AddTaskComponent extends Component {
    constructor() {
        super();
        this.state = {
            title: ''
        }
    }
    changeHandler = (e) => {
        this.setState({
            title: e.target.value
        });
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        });
    }
    render() {
        return (
            <form onSubmit = {this.submitHandler}>
                <input onChange = {this.changeHandler} type='text' value = {this.state.title} />
                <input type='submit' value='Submit' />
            </form>
        );
    }
}
export default AddTaskComponent;

// class AddTaskComponent extends Component {
//     constructor() {
//         super();
//         this.state = {
//             title: ''
//         }
//     }
//     submitForm = (e) => {
//         e.preventDefault();
//         this.props.addTodo(this.state.title);
//         this.setState({
//             title: ''
//         });
//     }
//     changeHandler = (e) => {
//         this.setState({[e.target.name]: e.target.value});
//     }
//     render() {
//         return(
//             <form onSubmit={this.submitForm} className='input-container'>
//                 <input
//                     type='text'
//                     name="title"
//                     style={{width: '420px'}}
//                     placeholder = 'Add Todo ...'
//                     value = {this.state.title}
//                     onChange = {this.changeHandler}
//                 />
//                 <input type='submit' value='Sumit' />
//             </form>
//         );
//     }
// }
// export default AddTaskComponent;