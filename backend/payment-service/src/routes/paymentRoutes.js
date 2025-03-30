import express from 'express';
import { processPayment, getPaymentDetails } from '../controllers/paymentController.js';

const router = express.Router();

router.post('/', processPayment);
router.get('/:id', getPaymentDetails);

export default router;
