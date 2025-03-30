import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  totalPrice: { type: Number, required: true },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'in progress', 'delivered', 'cancelled'],
    default: 'pending'
  }
}, { timestamps: true });

export default mongoose.model('Order', OrderSchema);
