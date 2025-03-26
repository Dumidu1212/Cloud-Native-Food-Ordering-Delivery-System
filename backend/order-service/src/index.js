import express from 'express';

const app = express();
const port = process.env.PORT || 3002;

// Basic route for health check
app.get('/', (req,res) => {
  res.status(200).send('Order Service is runnnig.');
});

app.listen(port, () => {
  console.log(`Order Service Listening On Port ${port}`);
});
