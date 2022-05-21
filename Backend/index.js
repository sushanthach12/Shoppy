const express = require('express');
const cookieParser = require('cookie-parser')
var cors = require('cors');
const connectDB = require('./db');

const app = express()
const port = process.env.PORT || 5000;

connectDB();

app.use(cors())
app.use(express.json()) // if you want use req body , you have to use thsi
app.use(cookieParser())


// available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/product', require('./routes/product'))
app.use('/api/Order', require('./routes/order'))
app.use('/api/cart', require('./routes/cart'))

app.listen(port, () => {
    console.log(`Dystro backend is listening at ${port}`)
})

module.exports = app