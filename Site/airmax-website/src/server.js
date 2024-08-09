import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Define Routes
app.get('/', (req, res) => res.send('API is running'));
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
