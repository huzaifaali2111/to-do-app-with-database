const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
   task: { 
    type: String, 
    required: [true, 'You must provide a task name'],
    trim: true // Automatically removes accidental spaces
  },
  createdAt: { type: Date, default: Date.now }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = mongoose.model("Todo", todoSchema);