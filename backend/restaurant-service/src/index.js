import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

// Basic route for health check
app.get('/', (req,res) => {
  res.status(200).send('Restaurant Service is runnig.');
});

app.listen(port, () => {
  console.log(`Restaurant Service Listening On Port ${port}`);
});