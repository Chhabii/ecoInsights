const mongoose = require("mongoose");


const dbUrl = "mongodb://localhost:27017";
const connectDb = () => {
  try {
    mongoose.connect(dbUrl);
    console.log("db connected successfully!");
  } catch (error) {
    console.log("db connection failed!");
  }
};

module.exports = connectDb;
