const express = require('express');
const { addProduct, updateProduct, deleteProduct } = require('../controllers/supplierController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.route('/supplier/addProduct').post(isAuthenticatedUser, authorizeRoles("supplier"), addProduct);
router.route('/supplier/updateProduct/:id').put(isAuthenticatedUser, authorizeRoles("supplier"), updateProduct);
router.route('/supplier/deleteProduct/:id').delete(isAuthenticatedUser, authorizeRoles("supplier"), deleteProduct);

module.exports = router;
