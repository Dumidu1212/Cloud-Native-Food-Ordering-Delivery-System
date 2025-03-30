import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import paymentRoutes from './routes/paymentRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Payment Service is running.');
});

app.use('/api/payments', paymentRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Payment Service listening on port ${PORT}`));
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
