import User from '../models/User.js';
import { generateToken } from '../services/authService.js';
import bcrypt from 'bcrypt';

/**
 * Register a new user.
 * Expects { name, email, password, role } in req.body.
 */
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    // Generate JWT token
    const token = generateToken(user._id, user.role);
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Log in a user.
 * Expects { email, password } in req.body.
 */
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = generateToken(user._id, user.role);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Update user profile.
 * Requires authentication (user ID attached to req.user by middleware).
 */
export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, { name, email }, { new: true });
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
