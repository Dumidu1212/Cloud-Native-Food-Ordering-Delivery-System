import express from 'express';
const router = express.Router();

router.get('/test', (req, res) => {
  res.status(200).send('Gateway test route');
});

export default router;
