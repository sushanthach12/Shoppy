const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart')
const fetchuser = require('../middleware/fetchuser')


router.post('/addToCart', fetchuser, async (req, res) => {


    try {

        // Create a new PRoduct
        const cart = await Cart.create({
            user: req.user.id,
            title: req.body.title,
            slug: req.body.slug,
            size: req.body.size,
            color: req.body.color,
            quantity: req.body.quantity,
            amount: req.body.amount
        })

        res.json({ "Success": true, "Cart": cart });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})

router.post('/fetchcartItem', fetchuser, async (req, res) => {

    try {

        // Create a new PRoduct
        let CartItems = await Cart.find({ userId: req.user.id })
        res.json({ "Success": true, "Cart": CartItems });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})

router.post('/removeFromCart', async (req, res) => {

    try {

        // Create a new PRoduct
        let cart = await Cart.deleteOne({ "slug": req.body.slug })

        res.json({ "Success": true, "Cart": cart });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})

module.exports = router