import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import deliveryRoutes from './routes/deliveryRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Delivery Service is running.');
});

app.use('/api/delivery', deliveryRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Delivery Service listening on port ${PORT}`));
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
