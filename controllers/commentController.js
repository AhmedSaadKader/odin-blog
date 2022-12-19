import Comment from "../models/Comment.js";
import { body, validationResult } from "express-validator";
import Post from "../models/Post.js";

const getAllComments = async (req, res) => {
  const postId = req.params.postid;
  const post = await Post.findOne({ postId });
  const comments = await Comment.find({ post: postId }).populate("text");
  res.send(comments);
};

const postComment = [
  body("text").trim().isLength({ min: 1 }).escape().withMessage("Comment cannot be empty"),
  async (req, res) => {
    req.body.author = req.user.userId;
    req.body.post = req.params.postid;
    const postId = req.params.postid;
    const postExists = await Post.findOne({ _id: postId });
    if (!postExists) {
      res.status(404).send("This post does not exist");
      return;
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send(errors.array());
      return;
    } else {
      const comment = await Comment.create(req.body);
      //   await Post.findOneAndUpdate({ post }, { $push: { comments: comment } });
      postExists.comments.push(comment);
      await postExists.save();
      res.status(200).json({ comment });
    }
  },
];

const getSingleComment = async (req, res) => {
  const comment = await Comment.findOne({ _id: req.params.commentid });
  res.send(comment);
};

const deleteComment = async (req, res) => {
  const comment = await Comment.findOne({ _id: req.params.commentid });
  const postId = comment.post;
  const post = await Post.findOne({ postId });
  await comment.deleteOne();
  post.comments.pull(comment._id);
  await post.save();
  res.send(post);
};

const updateComment = async (req, res) => {
  res.send("Update comment");
};

export { getAllComments, postComment, getSingleComment, deleteComment, updateComment };
