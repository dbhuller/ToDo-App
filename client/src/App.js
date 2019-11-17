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
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='/'>
            <img src={logo} width='30' height='30' alt='MERN Todo App' />
          </a>
          <Link to='/' className='navbar-brand'>ToDo-App</Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>Todo's</Link>
              </li>
              <li className='nav-item'>
                <Link to='/create' className='nav-link'>Create Todo</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Switch>
          <Route path='/create' component={CreateTodo} />
          <Route path='/edit/:id' component={EditTodo} />
          <Route path='/' component={TodoList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
