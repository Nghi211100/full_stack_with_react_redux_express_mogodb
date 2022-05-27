require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.PORT || null;
console.log(url);
const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS!");
  } catch (error) {
    console.error("MongoDB connection FAIL!");
    process.exit(1);
  }
};

module.exports = connectDB;
