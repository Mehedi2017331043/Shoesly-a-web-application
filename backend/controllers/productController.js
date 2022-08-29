const Product = require('../models/productModel');
const ErrorHander = require('../utils/errorHander')
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ApiFeatures = require('../utils/apiFeatures');

//Get All Products
exports.allProducts = catchAsyncErrors(async (req, res) => {
    const resultPerPage = 8;
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);
    const products = await apiFeature.query;
    res.status(200).json({
        success: true,
        NumberOfProduct: productCount,
        products,
    })
})

//Get Single Product
exports.singleProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }
    res.status(200).json({
        success: true,
        product
    })
})

//Create New Review or Update Review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
    console.log('hi');
    const { rating, comment, productId } = req.body;
    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment
    }
    const product = await Product.findById(productId);
    product.reviews.push(review);

    product.numberOfReviews = product.reviews.length;
    let avg = 0;
    product.reviews.forEach(rev => {
        avg += rev.rating;
    })
    product.ratings = avg / product.reviews.length;
    await product.save({ validateBeforeSave: false });
    res.status(200).json({
        success: true
    })
})

//Get All reviews Of a Single Product
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.id);
    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }
    res.status(200).json({
        success: true,
        reviews: product.reviews
    })
})
