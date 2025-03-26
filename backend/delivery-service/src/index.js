import express from 'express';

const app = express();
const port = process.env.PORT || 3003

// Basic route for health check
app.get('/', (req, res) => {
  res.status(200).send('Delivery Service is runnig.');
});

app.listen(port, () => {
  console.log(`Delivery Service Listening On Port ${port}`);
});