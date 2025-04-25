const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // Mongoose validation error
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            success: false,
            error: 'Validation Error',
            details: Object.values(err.errors).map(error => error.message)
        });
    }

    // Mongoose duplicate key error
    if (err.code === 11000) {
        return res.status(400).json({
            success: false,
            error: 'Duplicate Entry',
            message: 'This record already exists'
        });
    }

    // Default error
    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || 'Server Error'
    });
};

module.exports = errorHandler; 