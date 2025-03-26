import express from 'express';

const app = express();
const port = process.env.PORT || 3005;

// Basic route for health check
app.get('/', (req, res) => {
  res.status(200).send('Notification Service is runnig.');
});

app.listen(port, () => {
  console.log(`Notification Service Listening On Port ${port}`);
});