const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
const path = require('path');
const mongoose = require('mongoose');
const Todo = require("./models/todo");
// dotenv.config();
// connectDB();
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');

app.get("/", (req, res) => {
  res.render("index")
});
app.post("/add-todo", async (req, res) => {
  try {
    const { task, priority, dueDate } = req.body;
    if (!task|| task.trim() === "") {
      return res.status(400).send("Task cannot be empty!");
    }
    const newTodo = new Todo({
      task: task,
      priority: priority,
      dueDate: dueDate || null
    });
    await newTodo.save();
    console.log("Task saved successfully!");
    res.redirect("/");

  } catch (err) {
    console.error("Error saving to database:", err);
    res.status(500).send("Server Error");
  }
});


app.listen(5000, () => {
  console.log("Server started on port 5000");
});
