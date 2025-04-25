# Sky of Thoughts API

A backend API for managing stars (thoughts) in the sky.

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5000

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/skyofthoughts
```

### Environment Variables Description

- `PORT`: The port number on which the server will run (default: 5000)
- `MONGODB_URI`: MongoDB connection string (default: mongodb://localhost:27017/skyofthoughts)

## API Endpoints

### GET /api/stars
- Fetches all stars from the database
- Returns: Array of stars

### POST /api/stars
- Creates a new star
- Required fields:
  - x: Number (coordinate)
  - y: Number (coordinate)
  - thought: String
- Returns: Created star object

## Error Handling

The API includes comprehensive error handling for:
- Missing required fields
- Invalid data types
- Duplicate thoughts
- Database errors
- 404 Not Found routes 