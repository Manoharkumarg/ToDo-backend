const express = require('express');
const { createTodo, getTodo, deleteTodo } = require('../controller/todoController');
const router = express.Router();

router.route('/todos').post(createTodo);
router.route('/todos').get(getTodo);
router.route('/todos/:id').delete(deleteTodo);

module.exports = router;