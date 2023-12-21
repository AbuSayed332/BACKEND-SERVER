const express = require('express')
const { createTask, getTask, getTasks, updateTask, deleteTask } = require("../controller/taskController");

const router = express.Router()
// GET all tasks
router.get('/', getTasks)
// GET a task
router.get('/:id', getTask)
// POST tasks
router.post("/", createTask);
// UPDATE a tasks
router.patch('/:id', updateTask )
// DELETE a tasks
router.delete('/:id', deleteTask)

module.exports = router