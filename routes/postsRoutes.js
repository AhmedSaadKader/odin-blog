import { Router } from "express";
import { createPost, getAllPosts, getSinglePost, updatePost, deletePost } from "../controllers/postController.js";

const router = Router();

router.route("/").post(createPost).get(getAllPosts);
router.route("/:id").get(getSinglePost).patch(updatePost).delete(deletePost);

export default router;
