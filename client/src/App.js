import React from 'react';
import logo from './logo.svg';
import './App.css';
//added imports
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link } from 'react-router-dom';

//components
import TodoList from './components/TodosList';
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <h2>ToDo-App</h2>
      </div>
      <Switch>
        <Route path='/create' component={TodoList} />
        <Route path='/edit/:id' component={TodoList} />
        <Route path='/' component={TodoList} />
      </Switch>
    </div>
  );
}

export default App;
