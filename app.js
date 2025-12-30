const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require('path');
dotenv.config(); 
connectDB();
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.get("/", (req, res) => {
  res.render("index")
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
