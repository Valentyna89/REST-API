const express = require("express");
const router = express.Router();

const { validation, auth } = require("../../middlewares");
const ctrl = require("../../controllers/contacts");
const { contactShema, favoriteSchema } = require("../../schemas");

router.get("/", auth, ctrl.getContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", auth, validation(contactShema), ctrl.addNewContact);

router.delete("/:contactId", ctrl.removeContact);

router.put("/:contactId", validation(contactShema), ctrl.updateContact);

router.patch(
  "/:contactId/favorite",
  validation(favoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
