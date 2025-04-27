const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Star = require('./models/Star');
const errorHandler = require('./middleware/errorHandler');
const validateStar = require('./middleware/validateStar');
const checkInappropriateWords = require('./middleware/checkInappropriateWords');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Validate environment variables
if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI is not defined in .env file');
    process.exit(1);
}

// MongoDB Connection
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

connectDB();

// Routes
// Get all stars
app.get('/api/stars', async (req, res, next) => {
    try {
        const stars = await Star.find().sort({ createdAt: -1 });
        res.json({
            success: true,
            count: stars.length,
            data: stars
        });
    } catch (error) {
        next(error);
    }
});

// Save a new star
app.post('/api/stars', validateStar, checkInappropriateWords, async (req, res, next) => {
    try {
        const { x, y, thought } = req.body;
        const newStar = new Star({
            x,
            y,
            thought
        });
        const savedStar = await newStar.save();
        res.status(201).json({
            success: true,
            data: savedStar
        });
    } catch (error) {
        next(error);
    }
});

// Handle 404 routes
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        error: 'Not Found',
        message: `Cannot ${req.method} ${req.url}`
    });
});

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
