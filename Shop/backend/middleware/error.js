const ErrorHander = require('../utils/errorHander');


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    //wrong mongoDB ID Error
    if(err.name==="CastError"){
        const message = `Reasource not found. invalid: ${err.path}`
        err=new ErrorHander(message,400);
    }
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    })
}