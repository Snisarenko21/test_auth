const express = require("express");
const userController = require("../../controllers/user/index");
const auth = require("../../middlewares/auth");

const router = express.Router();

router.post("/signup", userController.register);
router.post("/login", userController.login);
router.get("/current", auth, userController.current);

module.exports = router;
