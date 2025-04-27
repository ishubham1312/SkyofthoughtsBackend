const stopwords = require('../stopwords');

const checkInappropriateWords = (req, res, next) => {
    const { thought } = req.body;
    
    if (!thought) {
        return next();
    }

    // Convert thought to lowercase for case-insensitive comparison
    const thoughtLower = thought.toLowerCase();
    
    // Check if any stopword is present in the thought
    const hasInappropriateWord = stopwords.some(word => 
        thoughtLower.includes(word.toLowerCase())
    );

    if (hasInappropriateWord) {
        return res.status(400).json({
            success: false,
            error: 'Inappropriate Content',
            message: 'Your thought contains inappropriate content'
        });
    }

    next();
};

module.exports = checkInappropriateWords; 