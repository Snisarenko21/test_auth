const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: String,
  email: String,
  password: String,
  token: String,
});

const User = model("userAuth", userSchema);

module.exports = User;
