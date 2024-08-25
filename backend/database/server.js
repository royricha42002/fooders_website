const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
const { dbConnection } = require('./dbConnection'); // Import the dbConnection function

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Use authentication routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB Atlas
dbConnection(); // Call the dbConnection function

// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Route not found middleware (optional)
app.use((req, res, next) => {
    res.status(404).send('Route not found');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
