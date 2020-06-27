const express = require('express');
const router = express.Router();
const UsersModel = require('../models/UsersModel');

// /register
router.post(
    '/register',     // http://localhost:8080/users/register
    (req, res) => {
        const formData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        };

        const newUsersModel = new UsersModel(formData);
        newUsersModel.save();
    }
);


// /login
module.exports = router;