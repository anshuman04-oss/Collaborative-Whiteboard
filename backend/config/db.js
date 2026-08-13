const mongoose = require("mongoose");
require("dotenv").config();

// Writing this comment only to check connectivity of Github Actions and EC2 server
const mongoUrl = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;