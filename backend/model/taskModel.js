const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    taskTitle: String,
    taskDescription: String
});

module.exports = mongoose.model("Task", taskSchema);