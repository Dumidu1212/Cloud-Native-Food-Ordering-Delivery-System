import express from 'express';
const router = express.Router();

// Sample test route
router.get('/test', (req, res) => {
  res.status(200).send('API Gateway Test Route');
});

export default router;
