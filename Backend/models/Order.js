const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
    user: {
        userId: {
            type: String,
            required: true
        },
        phoneNo: {
            type: Number,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        }

    },
    Product: [
        {
            title: {
                type: String,
                required: true
            },
            variant: {
                size: {
                    type: String,
                    required: true
                },
                color: {
                    type: String,
                    required: true
                }
            },
            quantity: {
                type: Number,
                default: 1
            },
            amount: {
                type: Number,
                required: true
            }
        }
    ]

}, { timestamps: true })


const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;