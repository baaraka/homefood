const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDB connection SUCCESS");
  } catch (error) {
    console.error("mongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
