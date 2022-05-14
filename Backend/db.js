const mongoose = require("mongoose")
const dotenv = require('dotenv').config();


const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, () => {
        console.log('connected');
    })
}


module.exports = connectDB;