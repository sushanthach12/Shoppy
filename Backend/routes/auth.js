const express = require('express');
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = process.env.JWT_SECRET;

//Route 1 : Create a user using: POST "/api/auth/signup" .No login required
router.post('/signup', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast of 8 characters').isLength({ min: 8 }),

], async (req, res) => {

    //if there are errors, return bad req
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        // Check if the user already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }

        const salt = await bcrypt.genSalt(12);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // Create a new User
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })

        // Authenticate user

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);

        // const options = {
        //     maxAge: 5000,
        //     // expires works the same as the maxAge
        //     expires: new Date('01 12 2021'),
        //     httpOnly: true,
        //     sameSite: 'lax'
        // }
        // res.cookie("jwt", authToken, options)
        res.status(200).json({ "Success": true, "AuthToken": authToken });

    } catch (error) {

        res.status(500).send("Internal Server error")
    }

})

//Route 2 : Login a user using: POST "/api/auth/login" .No login required

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {

    //if there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const { email, password } = req.body;

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please Login with correct credentials" })
        }

        const passCompare = await bcrypt.compare(password, user.password);

        if (!passCompare) {
            return res.status(400).json({ error: "Please Login with correct credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);

        // const options = {
        //     maxAge: 5000,
        //     // expires works the same as the maxAge
        //     expires: new Date('01 12 2021'),
        //     httpOnly: true,
        //     sameSite: 'lax'
        // }
        // res.cookie("jwt", authToken, options)
        res.status(200).json({ "Success": true, 'AuthToken': authToken });

    } catch (error) {
        res.status(500).send("Internal Server error")
    }

})


//Route 3 : get details of loggedin user using: POST "/api/auth/getUser" .No login required
router.post('/getUser', fetchuser, async (req, res) => {

    try {
        const userID = req.user.id;
        const user = await User.findById(userID).select('-password');
        return res.send(user)
    } catch (error) {
        res.status(500).send("Internal Server error")
    }

});

router.post('/checkuser', fetchuser, async (req, res) => {

    try {
        const token = req.cookies;
        return res.json({ "Success": true, "token": token })
    } catch (error) {
        res.status(500).send("Internal Server error")
    }

});

router.post('/logout', async (req, res) => {

    try {
        res.clearCookie()
        res.status(200).json({ "Success": true, "token": token })
    } catch (error) {
        res.status(500).send("Internal Server error")
    }

});


module.exports = router // do this , otherwise it will throw error