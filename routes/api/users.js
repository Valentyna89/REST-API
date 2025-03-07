const express = require("express");
const { validation, auth, upload } = require("../../middlewares");
const ctrl = require("../../controllers/users");
const { registerShema, loginShema, emailSchema } = require("../../models/user");
const router = express.Router();

router.post("/register", validation(registerShema), ctrl.register);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post("./verify", validation(emailSchema), ctrl.repeatVerifyEmail);

router.post("/login", validation(loginShema), ctrl.login);

router.get("/current", auth, ctrl.getCurrent);

router.post("/logout", auth, ctrl.logout);

router.patch("/avatars", auth, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;
