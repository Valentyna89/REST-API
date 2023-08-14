const express = require("express");

const router = express.Router();

const { contacts: ctrl } = require("../../controllers");

router.get("/", ctrl.getAllContacts);

router.get("/:id", ctrl.getById);

router.post("/", ctrl.addNewContact);

router.delete("/:id", ctrl.deleteContactById);

router.put("/:id", ctrl.updateContactById);

module.exports = router;
