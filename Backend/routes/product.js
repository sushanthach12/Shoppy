const express = require('express');
const Product = require('../models/Product')
const router = express.Router();


const ArrangeProducts = (Products) => {

    //Can use aggregation pipeline to get the product

    let PRODUCTS = {
        Tshirts: {},
        Pants: {},
        Hoodies: {}
    }


    for (let item of Products) {
        if (item.category === 'tshirt') {

            if (item.title in PRODUCTS.Tshirts) {
                if (!PRODUCTS.Tshirts[item.title].slug.includes(item.slug) && item.availableQty > 0) {
                    PRODUCTS.Tshirts[item.title].slug.push(item.slug)
                }
                if (!PRODUCTS.Tshirts[item.title].color.includes(item.color) && item.availableQty > 0) {
                    PRODUCTS.Tshirts[item.title].color.push(item.color)
                }
                if (!PRODUCTS.Tshirts[item.title].size.includes(item.size) && item.availableQty > 0) {
                    PRODUCTS.Tshirts[item.title].size.push(item.size)
                }
                if (!PRODUCTS.Tshirts[item.title].price.includes(item.price) && item.availableQty > 0) {
                    PRODUCTS.Tshirts[item.title].price.push(item.price)
                }


            } else {
                PRODUCTS.Tshirts[item.title] = JSON.parse(JSON.stringify(item))
                if (item.availableQty > 0) {
                    PRODUCTS.Tshirts[item.title].slug = [item.slug];
                    PRODUCTS.Tshirts[item.title].size = [item.size];
                    PRODUCTS.Tshirts[item.title].color = [item.color];
                    PRODUCTS.Tshirts[item.title].price = [item.price];
                }
            }


        } else if (item.category === 'pant') {

            if (item.title in PRODUCTS.Pants) {
                if (!PRODUCTS.Pants[item.title].color.includes(item.color && item.availableQty > 0)) {
                    PRODUCTS.Pants[item.title].color.push(item.color)
                }
                if (!PRODUCTS.Pants[item.title].color.includes(item.color && item.availableQty > 0)) {
                    PRODUCTS.Pants[item.title].size.push(item.size)
                }

            } else {
                PRODUCTS.Pants[item.title] = JSON.parse(JSON.stringify(item))
                if (item.availableQty > 0) {
                    PRODUCTS.Pants[item.title].size = [item.size];
                    PRODUCTS.Pants[item.title].color = [item.color];
                }
            }
        } else if (item.category === 'hoodies') {

            if (item.title in PRODUCTS.Hoodies) {
                if (!PRODUCTS.Hoodies[item.title].color.includes(item.color && item.availableQty > 0)) {
                    PRODUCTS.Hoodies[item.title].color.push(item.color)
                }
                if (!PRODUCTS.Hoodies[item.title].color.includes(item.color && item.availableQty > 0)) {
                    PRODUCTS.Hoodies[item.title].size.push(item.size)
                }

            } else {
                PRODUCTS.Hoodies[item.title] = JSON.parse(JSON.stringify(item))
                if (item.availableQty > 0) {
                    PRODUCTS.Hoodies[item.title].size = [item.size];
                    PRODUCTS.Hoodies[item.title].color = [item.color];
                }
            }
        }
    }

    return PRODUCTS

}


//Route 1 : Addd a Product using: POST "/api/product/addproduct" .No login required
router.post('/addproduct', async (req, res) => {

    try {

        const { title, slug, desc, image, size, color, category, price, availableQty } = req.body

        // Create a new PRoduct
        let product = await Product.create({
            title: title,
            slug: slug,
            desc: desc,
            image: image,
            size: size,
            color: color,
            category: category,
            price: price,
            availableQty: availableQty
        })

        res.json({ "Success": true, "Product": product });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})
//Route 1 : Addd a Product using: POST "/api/product/addproduct" .No login required
router.post('/addproducts', async (req, res) => {

    try {
        const Products = await Product.insertMany(req.body)

        res.json({ "Success": true, "Products": Products });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})


//Route 2 : Get a Product using: POST "/api/product/getproduct". No login required

router.post('/getproduct', async (req, res) => {

    try {

        const product = await Product.findOne({ 'slug': req.body.slug });
        const products = await Product.find({ 'title': product.title });
        let variants = {};


        for (let item of products) {
            if (Object.keys(variants).includes(item.color)) {
                variants[item.color][item.size] = {
                    "slug": item.slug
                }
            } else {
                variants[item.color] = {};
                variants[item.color][item.size] = {
                    "slug": item.slug,
                }
            }
        }
      


        res.json({ "Success": true, "Product": product, "Variants": variants });

    }catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})


//Route 3 : Get all the available products using: POST "/api/product/getproducts" .No login required
router.post('/getproducts', async (req, res) => {

    try {


        let product = await Product.find()
        if (!product) {
            return res.status(400).json({ error: "Sorry No products found" })
        }

        const GOODS = ArrangeProducts(product);

        res.json({ "Success": true, "Products": GOODS });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})

//Route 4 : Update a Product using: POST "/api/product/updateproducts" .No login required
router.post('/updateproducts', async (req, res) => {

    try {

        for (let i = 0; i < req.body.length; i++) {
            let p = await Product.findOne({ slug: req.body[i].slug })
            await Product.findByIdAndUpdate(p._id, {
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                image: req.body[i].image,
                size: req.body[i].size,
                color: req.body[i].color,
                category: req.body[i].category,
                price: req.body[i].price,
                availableQty: p.availableQty + req.body[i].availableQty
            })
        }


        res.json({ "Success": true, "Product": Product });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error")
    }

})



module.exports = router // do this , otherwise it will throw error