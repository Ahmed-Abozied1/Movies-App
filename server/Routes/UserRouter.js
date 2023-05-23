import express from 'express';
import { registerUser } from '../Controllers/UserControllers.js';
const router=express.Router();

// **Public Routes
router.post("/",registerUser);
export default router;