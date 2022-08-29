const express = require('express');
const { allProducts, singleProduct, createProductReview } = require('../controllers/productController');
const { isAuthenticatedUser } = require('../middleware/auth');

const router = express.Router();

router.route('/allProducts').get(allProducts);
router.route('/singleProduct/:id').get(singleProduct);
router.route('/review').put(isAuthenticatedUser, createProductReview);

module.exports = router;

