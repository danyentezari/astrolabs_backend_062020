// Import express into the file
const express = require('express');
const router = express.Router();
const EmailsModel = require('../models/EmailsModel');


// POST route for products
router.post(
    '/register',
    (req, res)=>{
        // Capture the form data
        const formData = {
            email: req.body.email,
        }

        // Instantiate the EmailsModel
        const newEmailsModel = new EmailsModel(formData);
        newEmailsModel.save(
            (err, result) => {
                if(err) {
                    console.log('error', e)
                } else {
                    res.json({message: 'Email has been saved!'});
                }
            }
        );
    }
);

// Export the router
module.exports = router;