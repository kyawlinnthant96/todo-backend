const catchAsync = require('../utils/catchAsync');
const Task = require('./../models/taskModel');
const ApiFeatures = require("../utils/apiFeatures")

exports.getAllTasks = catchAsync(async (req, res) => {
    const features = new ApiFeatures(Task.find(),req.query).filter().limitFields().paginate();
    const tasks = await features.query;
    res.status(200).json({
        status: 'success',
        results: tasks.length,
        data: {
            tasks
        }
    })
})

exports.getTask = catchAsync(async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            task: 'task'
        }
    })
})

exports.createTask = catchAsync(async (req, res) => {
    const newTask = await Task.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            task: newTask
        }
    })
})

exports.updateTask = catchAsync(async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            task: "task"
        }
    })
})

exports.deleteTask = catchAsync(async (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    })
})
