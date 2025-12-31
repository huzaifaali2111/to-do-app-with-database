const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI_local);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database Connection Failed", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
