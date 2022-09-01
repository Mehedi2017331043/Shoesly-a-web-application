const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    descripotion: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        maxLength: [8]
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        maxLength: [4],
        default: 0
    },
    numberOfReviews: {
        type: Number,
        defult: 0
    },
    reviews: [{
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "user",
        },
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    }],

    supplier: {
        type: mongoose.Schema.ObjectId,
        ref: "supplier",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Product', productSchema);