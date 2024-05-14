const catchAsync = require('../utils/catchAsync');
const Task = require('./../models/taskModel');
const ApiFeatures = require("../utils/apiFeatures")
const AppError = require("../utils/appError")

exports.getAllTasks = catchAsync(async (req, res) => {
    const totalTasks = await Task.find({userId: req.user._id})
    const features = new ApiFeatures(Task.find({userId: req.user._id}), req.query).filter().limitFields().paginate();
    const tasks = await features.query;
    res.status(200).json({
        status: 'success',
        results: totalTasks.length,
        data: {
            tasks
        }
    })
})

exports.getTask = catchAsync(async (req, res,next) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        return next(new AppError("Task with that Id no found", 404));
    }
    console.log(task.userId, req.user._id)
    res.status(200).json({
        status: 'success',
        data: {
            task
        }
    })
})

exports.createTask = catchAsync(async (req, res) => {
    const newTask = await Task.create({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        userId: req.user._id
    });
    res.status(201).json({
        status: 'success',
        data: {
            task: newTask
        }
    })
})

exports.updateTask = catchAsync(async (req, res, next) => {

    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    if (!task) {
        return next(new AppError("No task found with that Id", 404))
    }
    res.status(200).json({
        status: 'success',
        data: {
            task
        }
    })
})

exports.deleteTask = catchAsync(async (req, res, next) => {
    const tour = await Task.findByIdAndDelete(req.params.id);

    if (!tour) {
        return next(new AppError("No Task found with that id", 404))
    }
    res.status(204).json({
        status: 'success',
        data: null
    })
})
