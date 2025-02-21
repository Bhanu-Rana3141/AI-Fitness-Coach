const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Importing Routes
const authRoutes = require("./routes/authRoutes");

// environment variables from the .env file are loaded into process.env.
require('dotenv').config();

// function is called to connect with database
connectDB();

app.use(express.json()); // Middleware to parse JSON

// Authenticating routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});