const {Router} = require('express');
const router = Router();
const {getTodos, createTodo, updateTodo, deleteTodo, updateTodoStatus } = require('../controllers/todosController');


// GET /todos - get all todos
router.get('/todos', getTodos);

// POST /todos - create a new todo
router.post('/todos', createTodo);

// PATCH /todos/:id - update a todo
router.patch('/todos/:id', updateTodo);

// PATCH /todo/status/:id - update a todo status
router.patch('/todo/status/:id', updateTodoStatus);

// DELETE /todos/:id - delete a todo
router.delete('/todo/:id', deleteTodo);

module.exports = router;