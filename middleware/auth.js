import jwt from "jsonwebtoken";

const authenticateUser = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res.sendStatus(401);
  }
  try {
    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { ...payload };
    req.token = { token };
    next();
  } catch (error) {
    res.status(403).send(error);
  }
};

export default authenticateUser;
