import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import restaurantRoutes from './routes/restaurantRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.json());

// Routes
app.use('/api/restaurants', restaurantRoutes);

// Health-check route
app.get('/', (req, res) => {
  res.status(200).send('Restaurant Service is running.');
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Restaurant Service listening on port ${PORT}`));
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
