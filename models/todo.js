const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true, trim: true },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Low'
    },
    dueDate: { type: Date },
    createdAt: { type: Date, default: Date.now }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = mongoose.model("Todo", todoSchema);