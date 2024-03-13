import express from 'express';

const app = express();


import { createPost } from "../controllers/postController.js";


const router = Express.Router();

router.POST("/create", createPost)

export default router;

