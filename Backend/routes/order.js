const express = require('express');
const Order = require('../models/Order')
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')


router.post('/order',fetchuser, async (req, res) => {

    try {

        const {Product} = req.body

        const OrderId = "OrderID" + req.user.id + Math.random();

        // Create a new PRoduct
        const order = await Order.create({
            userId: req.user.id,
            OrderId: OrderId,
            Product: Product
        })

        res.json({ "Success": true, "Order": order });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})
router.post('/getOrders',fetchuser, async (req, res) => {

    try {

        const Orders = await Order.find({"userId": req.user.id})

        res.json({ "Success": true, "Order": Orders });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})

module.exports = router