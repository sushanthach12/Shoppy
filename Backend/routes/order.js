const express = require('express');
const Order = require('../models/Order')
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')


router.post('/order',fetchuser, async (req, res) => {

    try {

        const { user, Product} = req.body

        // Create a new PRoduct
        let order = await Order.create({
            user: user,
            Product: Product
        })

        res.json({ "Success": true, "Order": order });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})

module.exports = router