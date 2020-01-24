import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// function component for TodoList

const Todo = props => (
    <tr>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_author}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
            <Link to={'/edit/'+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState( { todos: response.data } );
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Author</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

// function TodosList(props) {
    
//     /*
//     let state = {
//         todo_description: '',
//         todo_author: '',
//         todo_priority: '',
//         todo_completed: false
//     }
//     */

//     return (
//         <div>
//             <p>Todo List Component</p>
//         </div>
//     )
// };

//export default TodosList;