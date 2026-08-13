const mongoose = require("mongoose");
require("dotenv").config();

// This comment is also to verify the GH Actions and EC2 connection
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