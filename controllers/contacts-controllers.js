const contactsOperations = require("../models/contacts");

const getAllContacts = async (req, res, next) => {
  const contacts = await contactsOperations.listContacts();
  return res.json(contacts);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await contactsOperations.getContactById(id);
  if (!result) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.status(200).json(result);
};

const addNewContact = async (req, res, next) => {
  const result = await contactsOperations.addContact(req.body);
  return res.status(201).json(result);
};

const deleteContactById = async (req, res, next) => {
  const { id } = req.params;
  const result = await contactsOperations.removeContact(id);

  if (!result) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.status(200).json({
    message: "contact deleted",
    data: { result },
  });
};

const updateContactById = async (req, res, next) => {
  const { id } = req.params;
  const result = await contactsOperations.updateContact(id, req.body);
  res.status(200).json(result);
};

module.exports = {
  getAllContacts,
  getById,
  addNewContact,
  deleteContactById,
  updateContactById,
};
