import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import authRouter from "./routes/authRoutes.js";
import postsRouter from "./routes/postsRoutes.js";
import authenticateUser from "./middleware/auth.js";
import commentsRouter from "./routes/commentsRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hi");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", authenticateUser, postsRouter);
app.use("/api/v1/comments", authenticateUser, commentsRouter);

const start = () => {
  try {
    const port = process.env.Port || 3000;
    mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server listening at port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
