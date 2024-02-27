import express from 'express';
import { signupUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/signup', signupUser); 
router.post('/login', signupUser); 





export default router;