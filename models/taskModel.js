const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {type: String, required: [true, "task must have a title."]},
    description: {type: String},
    status: {
        type: String,
        enum: ["open", "in_progress", "done"],
        default: "open",
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "task must belong to user!."]
    }
})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
