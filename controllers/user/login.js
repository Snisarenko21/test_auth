const User = require("../../models/contacts/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const { name } = user;
  const result = bcrypt.compare(password, user.password);
  if (!user || !result) {
    res.status(403).json({ message: "Доступ заборонено" });
  }

  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
  await User.findByIdAndUpdate(user._id, { token });

  res.status(201).json({
    status: "success",
    code: 201,
    token,
    user: { name, email },
  });
};

module.exports = login;
