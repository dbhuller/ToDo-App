import React, { Component } from 'react';


// function component for CreateTodo
function CreateTodo() {

    //state hooks
    const [description, setDescription] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [priority, setPriority] = React.useState('');
    const [completed, setCompleted] = React.useState(false);

    return (
        <div>
            <h2>Create Todo Component</h2>
            <form>
                <div className='form-group'>
                    <label>Description:</label>
                    <input
                    type='text'
                    className='form-control'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Author</label>
                    <input
                    type='text'
                    className='form-control'
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
};

export default CreateTodo;