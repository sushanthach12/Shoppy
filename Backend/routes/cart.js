const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart')
const fetchuser = require('../middleware/fetchuser')


router.post('/addToCart', fetchuser, async (req, res) => {


    try {
        let itemFound = await Cart.findOne({ userId: req.user.id, "slug": req.body.slug })

        let cart;

        if(itemFound){
            let CartItems = await Cart.find({ userId: req.user.id })
            for (const item of CartItems) {
                if (req.body.slug === item.slug) {
                    cart = await Cart.findOneAndUpdate({ "slug": req.body.slug, $inc: { "quantity": req.body.quantity } })
                }
            }
        }else{
            cart = await Cart.create({
                user: req.user.id,
                title: req.body.title,
                slug: req.body.slug,
                size: req.body.size,
                color: req.body.color,
                quantity: req.body.quantity,
                amount: req.body.amount
            })    
        }

        
       


        res.json({ "Success": true, "Cart": cart });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})

router.post('/fetchcart', fetchuser, async (req, res) => {

    try {
        const cart = await Cart.find({ userId: req.user.id })
        res.json({ "Success": true, "Cart": cart });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})

router.post('/removeitem', async (req, res) => {

    try {

        // Create a new PRoduct
        let cart = await Cart.findOneAndDelete({ "slug": req.body.slug })

        res.json({ "Success": true, "Cart": cart });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})

module.exports = router