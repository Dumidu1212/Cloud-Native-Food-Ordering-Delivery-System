import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route for health check
app.get('/', (req,res) => {
  res.status(200).send('API Gateway is runnig.');
});

// Start the server
app.listen(port, () => {
  console.log(`API Gateway Listening On Port ${port}`);
});
