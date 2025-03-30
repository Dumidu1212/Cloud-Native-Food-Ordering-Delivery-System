import express from 'express';
import dotenv from 'dotenv';
import gatewayRoutes from './routes/gatewayRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use the gateway routes for all API requests
app.use('/api', gatewayRoutes);

// Basic health-check route
app.get('/', (req, res) => {
  res.status(200).send('API Gateway is running.');
});

app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
});
