import express from 'express';

const app = express();
const port = process.env.PORT || 3004;

// Basic route for health check
app.get('/', (req,res) => {
  res.status(200).send('Payment Service in running.');
});

app.listen(port, () => {
  console.log(`Payment Service Listening On Port ${port}`);
});