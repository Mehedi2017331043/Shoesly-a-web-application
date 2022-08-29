const express = require('express');
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, DeleteOrder } = require('../controllers/orderController');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

router.route('/order/new').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, getSingleOrder);
router.route('/orders/me').get(isAuthenticatedUser, myOrders);
router.route('/admin/orders').get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);
router.route('/admin/order/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder);
router.route('/admin/order/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), DeleteOrder);

module.exports = router;