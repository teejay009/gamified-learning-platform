import express from 'express';

const app = express();
import { createPost, getPost } from "../controllers/postController.js";
import protectRoute from '../middlewares/protectRoute.js';


const router = express.Router();

router.get("/",getPost)
router.post("/create", protectRoute, createPost)

export default router;

