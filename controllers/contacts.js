const { Contact } = require("../models/contact");
const { contactShema } = require("../schemas/contacts");

const RequestError = require("../helpers/requestError");
const ctrlWrapper = require("../helpers/ctrlWrapper");

const getContacts = async (req, res, next) => {
  try {
    const data = await Contact.find();
    return res.json(data);
  } catch (error) {
    next(error);
  }
};

const getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await Contact.findById(contactId);

    res.json(contact);
  } catch (error) {
    throw RequestError(404, "Not found");
  }
};

const addNewContact = async (req, res, next) => {
  try {
    const { error } = contactShema.validate(req.body);
    if (error) {
      error.status = 400;
      throw error;
    }
    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const deleteContact = await Contact.findByIdAndRemove(contactId);
    if (!deleteContact) {
      throw RequestError(404, "Not found");
    }
    res.json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const updateContact = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });

    res.json(updateContact);
  } catch (error) {
    throw RequestError(404, "Not found");
  }
};

const updateStatusContact = async (req, res, next) => {
  if (!Object.keys(req.body).length) {
    return res.status(400).json({ message: "missing fields" });
  }
  try {
    const { contactId } = req.params;
    const { favorite } = req.body;

    const updateContact = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },
      {
        new: true,
      }
    );
    res.json(updateContact);
  } catch (error) {
    throw RequestError(404, "Not found");
  }
};

module.exports = {
  getContacts: ctrlWrapper(getContacts),
  getContactById: ctrlWrapper(getContactById),
  addNewContact: ctrlWrapper(addNewContact),
  removeContact: ctrlWrapper(removeContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
