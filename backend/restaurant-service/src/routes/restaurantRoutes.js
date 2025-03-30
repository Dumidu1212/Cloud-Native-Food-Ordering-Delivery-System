import express from 'express';
import { createRestaurant, getRestaurants, updateRestaurant, deleteRestaurant, addMenuItem, getMenuItemsByRestaurant } from '../controllers/restaurantController.js';

const router = express.Router();

router.post('/', createRestaurant);
router.get('/', getRestaurants);
router.put('/:id', updateRestaurant);
router.delete('/:id', deleteRestaurant);

// Menu item routes
router.post('/menu', addMenuItem);
router.get('/menu/:restaurantId', getMenuItemsByRestaurant);

export default router;
