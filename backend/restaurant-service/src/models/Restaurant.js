import mongoose from 'mongoose';

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  operatingHours: { type: String, required: true },
  // Additional fields as needed...
}, { timestamps: true });

export default mongoose.model('Restaurant', RestaurantSchema);
