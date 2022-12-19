import { Router } from "express";
import {
  deleteComment,
  getAllComments,
  getSingleComment,
  postComment,
  updateComment,
} from "../controllers/commentController.js";

const router = Router();

router.route("/:postid").get(getAllComments).post(postComment);
router.route("/:commentid").patch(updateComment).delete(deleteComment);
router.route("/comment/:commentid").get(getSingleComment);

export default router;
