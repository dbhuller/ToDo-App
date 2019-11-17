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
                <div className='form-group'>
                    <div className='form-check form-check-inline'>
                        <input
                        className='form-check-input'
                        type='radio'
                        name='priority'
                        id='priorityLow'
                        value='Low'
                        checked={priority === 'Low'}
                        onChange={e => setPriority('Low')}
                        />
                        <label className='form-check-label'>Low</label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input
                        className='form-check-input'
                        type='radio'
                        name='priority'
                        id='priorityMed'
                        value='Medium'
                        checked={priority === 'Medium'}
                        onChange={e => setPriority('Medium')}
                        />
                        <label className='form-check-label'>Medium</label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input
                        className='form-check-input'
                        type='radio'
                        name='priority'
                        id='priorityHigh'
                        value='High'
                        checked={priority === 'High'}
                        onChange={e => setPriority('High')}
                        />
                        <label className='form-check-label'>High</label>
                    </div>
                </div>
                <div className='form-group'>
                    <input
                        type='submit'
                        value='Create Todo'
                        className='btn btn-primary'
                    />
                </div>
            </form>
        </div>
    )
};

export default CreateTodo;