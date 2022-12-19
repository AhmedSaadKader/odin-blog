import User from "../models/User.js";
import { body, validationResult } from "express-validator";

const register = [
  body("name").trim().isLength({ min: 1 }).escape().withMessage("Name must be specified"),
  body("email").trim().isEmail().withMessage("Please provide a valid email"),
  //   body("password").isStrongPassword(),
  body("password").trim().isLength({ min: 1 }).withMessage("Password must be specified"),
  async (req, res, next) => {
    const { name, email, password } = req.body;
    const userAlreadyExists = await User.findOne({ email: req.body.email });
    if (userAlreadyExists) {
      res.status(403).send("Email already in use");
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send(errors.array());
      return;
    } else {
      try {
        const user = await User.create({ name, email, password });
        const token = user.createJWT();
        res.status(200).json({
          user: {
            name: user.name,
            email: user.email,
          },
          token,
        });
      } catch (err) {
        return next(err);
      }
    }
  },
];

const login = [
  body("email").trim().isEmail().escape().withMessage("Please provide a valid email"),
  body("password").trim().isLength({ min: 1 }).escape().withMessage("Password cannot be empty"),
  async (req, res, next) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send(errors.array());
      return;
    } else {
      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        res.status(401).send("Email does not exist. Please register");
      }
      const isPasswordCorrect = await user.comparePassword(password);
      if (!isPasswordCorrect) {
        res.status(401).send("Wrong password");
      }
      const token = user.createJWT();
      user.password = undefined;
      res.status(200).json({ user, token });
    }
  },
];

const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
