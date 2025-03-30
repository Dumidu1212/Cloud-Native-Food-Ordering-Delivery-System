import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import notificationRoutes from './routes/notificationRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Notification Service is running.');
});

app.use('/api/notifications', notificationRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Notification Service listening on port ${PORT}`));
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
