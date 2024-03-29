const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");
const router = express.Router();

router.post("/login", authUser);
router.post("/register", registerUser);

module.exports = router;
