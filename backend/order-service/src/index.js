import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Order Service is running.');
});

app.use('/api/orders', orderRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Order Service listening on port ${PORT}`));
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
