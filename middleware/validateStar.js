const Star = require('../models/Star');

const validateStar = async (req, res, next) => {
    const { x, y, thought } = req.body;

    // Check if all required fields are present
    if (!x || !y || !thought) {
        return res.status(400).json({
            success: false,
            error: 'Missing Required Fields',
            message: 'Please provide x, y coordinates and thought'
        });
    }

    // Validate x and y are numbers
    if (isNaN(x) || isNaN(y)) {
        return res.status(400).json({
            success: false,
            error: 'Invalid Coordinates',
            message: 'x and y must be numbers'
        });
    }

    // Validate thought is a string and not empty
    if (typeof thought !== 'string' || thought.trim().length === 0) {
        return res.status(400).json({
            success: false,
            error: 'Invalid Thought',
            message: 'Thought must be a non-empty string'
        });
    }

    try {
        // Check if thought already exists
        const existingStar = await Star.findOne({ thought: thought.trim() });
        if (existingStar) {
            return res.status(400).json({
                success: false,
                error: 'Duplicate Thought',
                message: 'This thought already exists in the sky'
            });
        }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = validateStar; 