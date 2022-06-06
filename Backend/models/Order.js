const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Which user is loggedin 
        ref: 'user'
    },
    OrderId:{
        type:String,
        unique: true,
        default: "OrderID0"
    },
    Product: {type: Object, required: true},
    paymentInfo : {
        type: String,
        default: "Pending"
    },
    status : {
        type: String,
        default: "Pending",
        required: true
    }

}, { timestamps: true })


const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;