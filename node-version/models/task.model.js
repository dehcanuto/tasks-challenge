const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(({
    title: { type: String, require: true },
    description: String,
    completed: { type: Boolean, default: false },  
}))

module.exports = mongoose.model('Task', TaskSchema)