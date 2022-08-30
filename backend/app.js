const express = require('express');
const errorMiddleware = require('./middleware/error');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser=require('body-parser');
const fileUpload=require('express-fileupload');

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());

//Route imports
const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
const supplier = require('./routes/supplierRote');
const admin = require('./routes/adminRoute');
const order = require('./routes/orderRoute');

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', supplier);
app.use('/api/v1', admin);
app.use('/api/v1', order);

//Middleware for error 
app.use(errorMiddleware);

module.exports = app;