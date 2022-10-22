const User = require("../../models/contacts/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  const hashPass = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashPass });

  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
  await User.findByIdAndUpdate(user._id, { token });

  res.status(201).json({
    status: "success",
    code: 201,
    token,
    user: { name, email },
  });
};

module.exports = register;
