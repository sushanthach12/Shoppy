const express = require('express');
const Order = require('../models/Order')
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const crypto = require('crypto');


router.post('/order', fetchuser, async (req, res) => {

    try {

        const { Product, status } = req.body

        const OrderId = "OrderID" + crypto.randomBytes(16).toString("hex");

        // Create a new PRoduct
        const order = await Order.create({
            userId: req.user.id,
            OrderId: OrderId,
            Product: Product,
            status: status
        })

        res.json({ "Success": true, "Order": order });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})
router.post('/getOrders', fetchuser, async (req, res) => {

    try {

        const Orders = await Order.find({ "userId": req.user.id })
        if (!Orders) {
            return res.status(400).json({ error: "Sorry No Orders found" })
        }


        res.json({ "Success": true, "Order": { ...Orders } });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})
router.post('/orderItem/:oid', fetchuser, async (req, res) => {

    try {

        const order = await Order.aggregate([
            {
                '$match': {
                    'OrderId': req.params.oid
                }
            }
        ])
        if (!order) {
            return res.status(400).json({ error: "Sorry No Orders found" })
        }


        res.json({ "Success": true, "Order": order[0] });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})

module.exports = router