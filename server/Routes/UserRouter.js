import express from 'express';
import { addLickedMovies, changeUserPassword, deleteLickedMovies, deleteUser, deleteUserProfile, getLickedMovies, getUsers, loginUser, registerUser, updateUserProfile } from '../Controllers/UserControllers.js';
import { protect ,admin} from '../middlewares/Auth.js';
const router=express.Router();

// **Public Routes
router.post("/",registerUser);
router.post("/login",loginUser);
//*****Private Routes */

router.put("/",protect,updateUserProfile);
router.delete("/",protect,deleteUserProfile);
router.put("/password",protect,changeUserPassword);
router.get("/favorites",protect,getLickedMovies);
router.post("/favorites",protect,addLickedMovies);
router.delete("/favorites",protect,deleteLickedMovies);

//   ADMIN ROUTES****************
router.get("/",protect,admin,getUsers); 
router.delete("/:id",protect,admin,deleteUser); 

 
export default router;