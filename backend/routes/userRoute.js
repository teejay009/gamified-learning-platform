import express from 'express';
import { signupUser, loginUser, logoutUser, followUnfollowUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/signup', signupUser); 
router.post('/login', loginUser); 
router.post('/logout', logoutUser); 
router.post("/follow/:id", protect followUnfollowUser);



export default router;