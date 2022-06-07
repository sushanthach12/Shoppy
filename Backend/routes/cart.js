const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart')
const fetchuser = require('../middleware/fetchuser')


router.post('/addToCart', fetchuser, async (req, res) => {

    try {

        const cart = await Cart.create({
            user: req.user.id,
            title: req.body.title,
            slug: req.body.slug,
            size: req.body.size,
            color: req.body.color,
            quantity: req.body.quantity,
            amount: req.body.amount
        })


        return res.json({ "Success": true, "Cart": cart });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})

router.post('/fetchcart', fetchuser, async (req, res) => {
    try {
        const cart = await Cart.find({ user: req.user.id })
        let subTotal = 0;
        let CartItems = {};
        for (let item of cart) {
            subTotal = subTotal + (item.amount * item.quantity)

            if(Object.keys(CartItems).includes(item.slug)){
                CartItems[item.slug].quantity += item.quantity
            }else{
                CartItems[item.slug] = {}
                CartItems[item.slug] = JSON.parse(JSON.stringify(item))
            }
        }
        
        return res.json({ "Success": true, "Cart": CartItems, "SubTotal": subTotal });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})

router.post('/removeitem/:slug',fetchuser, async (req, res) => {

    try {
        let cart = await Cart.findOneAndDelete({ "slug": req.params.slug })

        return res.json({ "Success": true, "Cart": cart });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})
router.post('/clearCart',fetchuser, async (req, res) => {

    try {
        let cart = await Cart.deleteMany({ "userId": req.user.id })

        return res.json({ "Success": true, "Cart": cart });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})

module.exports = router