"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get('/todo', (req, res) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res) => {
    const body = req.body;
    const new_todo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(new_todo);
    res.status(201).json({ message: 'ToDo Added Successfully' });
});
router.put('/todo/:todoId', (req, res) => {
    const body = req.body;
    const params = req.params;
    const id = params.todoId;
    const todo_index = todos.findIndex(todo_item => todo_item.id == id);
    if (todo_index >= 0) {
        todos[todo_index] = { id: todos[todo_index].id, text: body.text };
        res.status(201).json({ message: 'ToDo Updated Successfully', ToDos: todos });
    }
    else {
        res.status(404).json({ message: 'ToDo Not Found' });
    }
});
router.delete('/todo/:todoId', (req, res) => {
    const params = req.params;
    const id = params.todoId;
    const todo_index = todos.findIndex(todo_item => todo_item.id == id);
    if (todo_index >= 0) {
        todos.splice(todo_index, 1);
        res.status(200).json({ message: 'ToDo Deleted Successfully', ToDos: todos });
    }
    else {
        res.status(404).json({ message: 'ToDo Not Found' });
    }
});
exports.default = router;
