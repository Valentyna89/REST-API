const express = require("express");

const router = express.Router();

const { validation, ctrlWrapper } = require("../../middlewares");
const { contactShema } = require("../../schemas");
const { contacts: ctrl } = require("../../controllers");

router.get("/", ctrlWrapper(ctrl.getAllContacts));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validation(contactShema), ctrlWrapper(ctrl.addNewContact));

router.delete("/:id", ctrlWrapper(ctrl.deleteContactById));

router.put(
  "/:id",
  validation(contactShema),
  ctrlWrapper(ctrl.updateContactById)
);

module.exports = router;
