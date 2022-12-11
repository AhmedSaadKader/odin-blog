import { Router } from "express";

const router = Router();

router.route("/register").post((req, res) => {
  res.send("register user");
});

router.route("/login").post((req, res) => {
  res.send("login user");
});

export default router;
