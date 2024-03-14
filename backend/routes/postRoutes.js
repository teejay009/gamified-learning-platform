import express from 'express';

const app = express();


import { createPost } from "../controllers/postController.js";
import protectRoute from '../middlewares/protectRoute.js';


const router = express.Router();

router.post("/create", protectRoute, createPost)

export default router;

