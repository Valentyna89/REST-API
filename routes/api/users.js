const express = require("express");
const router = express.Router();

const { validation, auth } = require("../../middlewares");
const ctrl = require("../../controllers/users");
const { registerShema, loginShema } = require("../../models/user");

router.post("/register", validation(registerShema), ctrl.register);

router.post("/login", validation(loginShema), ctrl.login);

router.get("/current", auth, ctrl.getCurrent);

router.post("/logout", auth, ctrl.logout);

module.exports = router;
