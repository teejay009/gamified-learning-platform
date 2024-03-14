import express from 'express';

const app = express();
import { createPost, deletePost, getPost, likeUnlikePost, replyToPost } from "../controllers/postController.js";
import protectRoute from '../middlewares/protectRoute.js';


const router = express.Router();

router.get("/id",getPost);
router.post("/create", protectRoute, createPost);
router.delete("/:id",protectRoute, deletePost);
router.post("/like:id",protectRoute, likeUnlikedPost);
router.post("/reply:id",protectRoute, replyToPost);

export default router;

