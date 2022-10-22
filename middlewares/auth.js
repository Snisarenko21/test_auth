const jwt = require("jsonwebtoken");
const User = require("../models/contacts/user");

const auth = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  const { id } = jwt.verify(token, process.env.SECRET_KEY);
  const user = await User.findById(id);
  if (!user) {
    return res.status(403).json({ measseg: "Доступ заборонено" });
  }
  req.user = user;
  next();
};

module.exports = auth;
