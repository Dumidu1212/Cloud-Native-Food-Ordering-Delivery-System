import Delivery from '../models/Delivery.js';

// Assign a delivery driver and create a new delivery record
export const assignDelivery = async (req, res) => {
  try {
    const delivery = new Delivery(req.body);
    await delivery.save();
    res.status(201).json(delivery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update delivery status (e.g., picked up, in transit, delivered)
export const updateDeliveryStatus = async (req, res) => {
  try {
    const updatedDelivery = await Delivery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDelivery) return res.status(404).json({ message: 'Delivery not found' });
    res.status(200).json(updatedDelivery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
