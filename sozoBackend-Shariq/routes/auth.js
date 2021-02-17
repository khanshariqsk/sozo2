const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/user-controller");
const verifyToken = require("../verifyToken");

router.post("/register", registerUser); //Protected Route ..require token to access
router.post("/login", loginUser);

module.exports = router;
                             