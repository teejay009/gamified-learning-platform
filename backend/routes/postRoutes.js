import express from 'express';

const app = express();


import { createPost } from "../controllers/postController.js";


const router = express.Router();

router.post("/create", createPost)

export default router;

