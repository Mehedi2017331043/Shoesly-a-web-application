const express = require('express');
const { registerUser, logInUser, logOutUser, getUserDetails, updateProfile, } = require('../controllers/userController');
const { isAuthenticatedUser } = require('../middleware/auth');
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(logInUser);
router.route("/logout").get(logOutUser);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

module.exports = router;
