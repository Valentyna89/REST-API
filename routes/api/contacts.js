const express = require("express");
const router = express.Router();

const { validation } = require("../../helpers");
const ctrl = require("../../controllers/contacts");
const { contactShema, favoriteSchema } = require("../../schemas");

router.get("/", ctrl.getContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validation(contactShema), ctrl.addNewContact);

router.delete("/:contactId", ctrl.removeContact);

router.put("/:contactId", validation(contactShema), ctrl.updateContact);

router.patch(
  "/:contactId/favorite",
  validation(favoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
