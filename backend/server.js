
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 4000;

const todoRoutes = express.Router();
let Todo = require('./todo_model');

app.use(cors());
app.use(bodyparser.json());

app.use('/todos', todoRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/todoDB', { useNewUrlParser:true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log('MongoDB connection estabished');
});

todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if(err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if(!todo)
            res.status(404).send('Data not found');
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_author = req.body.todo_author;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo updated');
            })
            .catch(err => {
                res.status(400).send('Update not possible');
            });
    });
});

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
    .then(todo => {
        res.status(200).json({ 'todo': 'todo added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new todo failed');
    });
});

app.use('/todos', todoRoutes);


app.listen(port, function() {
    console.log('Server running on port: ' + port);
});