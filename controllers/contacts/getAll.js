const { Contact } = require("../../models/contacts");

const getAll = async (req, res) => {
  const contacts = await Contact.find();
  res.send(contacts);
};

module.exports = getAll;
