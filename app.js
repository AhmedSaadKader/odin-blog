import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const port = process.env.Port || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hi");
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server listening at port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
