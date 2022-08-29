const User = require('../models/userModel');
const ErrorHander = require('../utils/errorHander')
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

//Get all Users (admin)
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users
    })
})

//Get single user (admin)
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new ErrorHander(`User does'nt exist with id: ${req.params.id}`));
    }
    res.status(200).json({
        success: true,
        user
    })
})

//Update User role
exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }
    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true
    })
})
//Delete User
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    //We will remove cloudinary later
    if (!user) { return next(new ErrorHander(`User does not exist with Id:${req.params.id}`, 404)); }
    await user.remove();
    res.status(200).json({
        success: true,
        message: "User Deleted Successfully"
    })
})


