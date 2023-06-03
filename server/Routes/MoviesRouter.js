import express from 'express';
import { protect ,admin} from '../middlewares/Auth.js';
import { importMovies } from '../Controllers/MoviesControllers.js';

const router=express.Router();

// **Public Routes
router.post("/",importMovies);

//*****Private Routes */



//   ADMIN ROUTES****************


 
export default router;