const current = (req, res) => {
  const { name, email, token } = req.user;
  res.status(201).json({ name, email, token });
};

module.exports = current;
