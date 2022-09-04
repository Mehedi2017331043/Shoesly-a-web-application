const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    bank:{
        type:String,
        required:true,
        default:false
    },
    account_no:{
        type:String,
        required:true,
    },
    balance :{
        type:Number,
        default:100000000
    }

});

const User = mongoose.model('user', userSchema);

module.exports = User;