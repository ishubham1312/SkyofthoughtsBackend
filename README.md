# Sky of Thoughts API

A backend API for managing stars (thoughts) in the sky.

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5000

# MongoDB Configuration
# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/skyofthoughts

# MongoDB Atlas (Cloud)
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/skyofthoughts?retryWrites=true&w=majority
```

### Environment Variables Description

- `PORT`: The port number on which the server will run (default: 5000)
- `MONGODB_URI`: MongoDB connection string
  - For local MongoDB: `mongodb://localhost:27017/skyofthoughts`
    - `skyofthoughts` is the database name
  - For MongoDB Atlas: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/skyofthoughts?retryWrites=true&w=majority`
    - `skyofthoughts` is the database name
    - Replace `<username>` and `<password>` with your credentials
    - Replace `cluster0.xxxxx.mongodb.net` with your cluster URL

## Database Setup

### Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Use the local connection string in `.env`
4. The database will be automatically created when the first document is inserted

### MongoDB Atlas (Cloud)
1. Create a free account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database named `skyofthoughts`
4. Get your connection string and replace the placeholders
5. Use the Atlas connection string in `.env`

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