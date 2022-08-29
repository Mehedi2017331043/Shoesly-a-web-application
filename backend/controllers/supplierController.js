const Product = require('../models/productModel');
const ErrorHander = require('../utils/errorHander')
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

//Create Product
exports.addProduct = catchAsyncErrors(async (req, res, next) => {
    req.body.supplier = req.user.id;
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
})

//Update Product
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }
    product = await Product.findOneAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        product
    })
})

//Delete Product
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }
    await product.remove()
    res.status(200).json({
        success: true,
        message: "Product Delete Successfully"
    })
})










