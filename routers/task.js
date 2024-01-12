const express = require('express')
const router = express.Router();

const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require("../controllers/tasks");


// get all items
router.route('/').get(getAllTasks);
// create task
router.route('/').post(createTask);
// get task
router.route('/:id').get(getTask);
// update task
router.route('/:id').patch(updateTask);
// delete task
router.route('/:id').delete(deleteTask);




module.exports = router;