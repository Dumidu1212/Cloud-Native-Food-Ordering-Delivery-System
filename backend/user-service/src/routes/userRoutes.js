import express from 'express';
import { registerUser, loginUser, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../services/authService.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/profile', protect, updateUserProfile);

export default router;
