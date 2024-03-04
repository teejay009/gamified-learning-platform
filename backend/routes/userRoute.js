import express from 'express';
import { signupUser, loginUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/signup', signupUser); 
router.post('/login', loginUser); 
router.post('/logout', logoutUser); 
router.post("/unfollow", );
router.post("/unfollow", );


export default router;