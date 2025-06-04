const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connection');

const app = express();
const PORT = process.env.PORT || 8000;

// 🔥 CORS middleware must come first
app.use(cors({
    origin: 'http://localhost:5173',  // ✅ no trailing slash
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// MongoDB connection
require('dotenv').config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.get("/test", (req, res) => {
    res.json({ data: "Test endpoint is working!" });
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
