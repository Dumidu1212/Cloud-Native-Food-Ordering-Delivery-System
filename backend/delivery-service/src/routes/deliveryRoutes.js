import express from 'express';
import { assignDelivery, updateDeliveryStatus } from '../controllers/deliveryController.js';

const router = express.Router();

router.post('/', assignDelivery);
router.put('/:id', updateDeliveryStatus);

export default router;
