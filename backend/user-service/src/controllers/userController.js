import User from '../models/User.js';
import { generateToken } from '../services/authService.js';
import bcrypt from 'bcrypt';

// Register a new user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role // 'admin', 'customer', or 'delivery'
    });
    await user.save();
    // Generate a JWT token
    const token = generateToken(user._id, user.role);
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login a user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    // Compare the password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    // Generate a JWT token
    const token = generateToken(user._id, user.role);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user profile (Protected route)
export const updateUserProfile = async (req, res) => {
  try {
    // Assuming the user ID is attached to req.user by the authentication middleware
    const userId = req.user.id;
    const { name, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, { name, email }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
