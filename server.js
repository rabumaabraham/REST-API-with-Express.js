const express = require('express');  // Import Express library
const app = express();  // Create an Express app

// Middleware to automatically parse incoming JSON data
app.use(express.json());

// Sample data (a simple "database" stored in memory)
let todos = [
  { id: 1, task: 'Buy groceries', completed: false },
  { id: 2, task: 'Learn Express.js', completed: false },
];

// Endpoint to get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);  // Send the list of todos as JSON
});

// Endpoint to add a new todo
app.post('/api/todos', (req, res) => {
  const { task } = req.body;  // Get task from the request body
  const newTodo = {
    id: todos.length + 1,  // Generate a new ID
    task: task,
    completed: false,  // Default to false (not completed)
  };
  todos.push(newTodo);  // Add the new todo to the list
  res.status(201).json(newTodo);  // Return the new todo
});

// Endpoint to update a todo
app.put('/api/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id);  // Get the todo ID from the URL
  const { task, completed } = req.body;   // Get new task and completed status from the body

  const todo = todos.find(t => t.id === todoId);  // Find the todo by ID

  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });  // If not found, return 404
  }

  // Update the todo
  todo.task = task || todo.task;  // Update the task, if provided
  todo.completed = completed !== undefined ? completed : todo.completed;  // Update completed status, if provided

  res.json(todo);  // Return the updated todo
});

// Endpoint to delete a todo
app.delete('/api/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id);  // Get the todo ID from the URL
  const index = todos.findIndex(t => t.id === todoId);  // Find the index of the todo

  if (index === -1) {
    return res.status(404).json({ message: 'Todo not found' });  // If not found, return 404
  }

  todos.splice(index, 1);  // Delete the todo from the list
  res.status(204).send();  // Send a 204 status (no content)
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Endpoint to get a single todo by its ID
app.get('/api/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);  // Get the ID from the request URL (e.g., /api/todos/1)
    const todo = todos.find(t => t.id === todoId);  // Find the todo with that ID
  
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });  // If not found, return a 404 error
    }
  
    res.json(todo);  // Return the todo
  });
  
