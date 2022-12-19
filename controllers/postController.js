import Post from "../models/Post.js";
import { body, validationResult } from "express-validator";
import User from "../models/User.js";
import Comment from "../models/Comment.js";

const createPost = [
  body("title").trim().isLength({ min: 1 }).escape().withMessage("Please provide a title"),
  body("body").trim().isLength({ min: 1 }).escape().withMessage("Post body can not be empty."),
  //   body("published").trim().isBoolean(),
  async (req, res, next) => {
    req.body.author = req.user.userId;
    const { title } = req.body;
    const titleAlreadyExists = await Post.findOne({ title });
    if (titleAlreadyExists) {
      res.status(403).send("A post with a similar title exists");
    }
    // const userExists = await User.findOne({ email: author });
    // if (!userExists) {
    //   res.status(403).send("Author does not exist");
    // }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send(errors.array());
      return;
    } else {
      const post = await Post.create(req.body);
      res.status(200).json({ post });
    }
  },
];

const getAllPosts = async (req, res) => {
  const posts = await Post.find().populate({ path: "comments", model: Comment });
  res.json({ posts });
};

const getSinglePost = async (req, res) => {
  try {
    const [post, comments] = await Promise.all([
      Post.findById(req.params.id),
      Comment.findOne({ post: req.params.id }),
    ]);
    res.json({ post, comments });
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (req, res) => {
  const postid = req.params.id.trim();
  await Comment.deleteMany({ post: postid });
  await Post.findOneAndDelete({ _id: req.params.id });
  res.send("Post deleted");
};

const updatePost = (req, res) => {
  res.send("update post");
};

export { createPost, getAllPosts, getSinglePost, deletePost, updatePost };
