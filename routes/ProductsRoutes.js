// Import express into the file
const express = require('express');
const router = express.Router();
const ProductsModel = require('../models/ProductsModel');


// POST route for products
router.post(
    '/',
    (req, res)=>{
        // Capture the form data
        const formData = {
            brand: req.body.brand,
            model: req.body.model,
            price: req.body.price,
            qty: req.body.qty,
        }

        // Instantiate the ProductsModel
        const newProductsModel = ProductsModel(formData);
        newProductsModel.save();

        res.send('Product has been saved!');
    }
);

// Export the router
module.exports = router;