import mongoose from 'mongoose';

const DeliverySchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: {
    type: String,
    enum: ['assigned', 'picked up', 'in transit', 'delivered'],
    default: 'assigned'
  }
}, { timestamps: true });

export default mongoose.model('Delivery', DeliverySchema);
