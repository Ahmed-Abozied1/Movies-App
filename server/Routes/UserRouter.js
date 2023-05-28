import express from 'express';
import { changeUserPassword, deleteUserProfile, getLickedMovies, loginUser, registerUser, updateUserProfile } from '../Controllers/UserControllers.js';
import { protect } from '../middlewares/Auth.js';
const router=express.Router();

// **Public Routes
router.post("/",registerUser);
router.post("/login",loginUser);
//*****Private Routes */

router.put("/",protect,updateUserProfile);
router.delete("/",protect,deleteUserProfile);
router.put("/password",protect,changeUserPassword);
router.get("/favorites",protect,getLickedMovies);
export default router;