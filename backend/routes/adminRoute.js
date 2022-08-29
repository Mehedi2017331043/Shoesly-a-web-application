const express = require('express');
const { getAllUser, getSingleUser, deleteUser, updateUserRole } = require('../controllers/adminConroller');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.route("/admin/allUsers").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);
router.route("/admin/user/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser);
router.route("/admin/user/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole);
router.route("/admin/user/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
module.exports = router;