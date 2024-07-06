# Note-Taker-Backend

## Introduction
Developed using Node.js, Express.js, and MongoDB, this sophisticated backend note management system elevates your productivity. Seamlessly integrating user authentication and note management functionalities, it offers a streamlined experience for organizing your thoughts.


## Setup Instructions
1. Clone the repository.
```
git clone <github link>
```

2. Ensure Node.js is installed on your machine.

3. Install dependencies
```
npm install
```

4. Set up the MongoDB database and obtain the connection URI.

5. Create a `.env` file in the root directory and add the following environment variables:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_uri
JWT_SECRET=your_secret_key
CORS_ORIGIN=http://localhost:3000
```


## Running the Application

To start the application, run:
```
npm run dev
```

## Testing
Postman or any preferred API testing tool facilitates thorough examination of the application's functionalities. Here's a breakdown of available endpoints:

1. Register User - POST "/api/auth/register" 
2. Login User - POST "/api/auth/login" 
3. Get User - GET "/api/auth/" 
4. Create Note - POST "/api/notes/" 
5. Get Notes - GET "/api/notes/" 
6. Update Note - PUT "/api/notes/:id" 
7. Delete Note - DELETE "/api/notes/:id"
