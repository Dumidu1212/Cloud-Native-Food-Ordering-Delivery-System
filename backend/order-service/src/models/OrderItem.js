import mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
  quantity: { type: Number, required: true, default: 1 }
}, { timestamps: true });

export default mongoose.model('OrderItem', OrderItemSchema);
