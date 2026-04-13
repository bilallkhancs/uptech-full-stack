require('dotenv').config(); // 👈 yeh BILKUL pehli line honi chahiye

const express = require('express');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/students', require('./routes/studentRoutes'));

// Home route
app.get('/', (req, res) => {
  res.send('Students CRUD API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});