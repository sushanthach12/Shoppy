const mongoose = require('mongoose');
const { Schema } = mongoose;

const CartSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    amount: {
        type: Number,
        required: true
    }


}, { timestamps: true })


const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;