import React from 'react';



function TodosList(props) {

    const [description, setDescription] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [priority, setPriority] = React.useState('');
    const [completed, setCompleted] = React.useState(false);

    /*
    let state = {
        todo_description: '',
        todo_author: '',
        todo_priority: '',
        todo_completed: false
    }
    */

    return (
        <div>
            <p>Todo List Component</p>
        </div>
    )
};

export default TodosList;