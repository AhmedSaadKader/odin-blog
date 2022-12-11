import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRouter from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hi");
});

app.use("/api/v1/auth", authRouter);

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
