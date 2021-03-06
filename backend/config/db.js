require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
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
