const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Which user is loggedin 
        ref: 'user'
    },
    Product: [
        {
            title: {
                type: String,
                required: true
            },
            variant: {
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