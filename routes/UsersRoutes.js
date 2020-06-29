const express = require('express');
const bcrypt = require('bcrypt');
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


        // Step 1) Generate a salt
        bcrypt.genSalt(
            (err, salt) => {

                // Step 2) Generate a hash
                bcrypt.hash(
                    formData.password, // first ingredient
                    salt, // second ingredient
                    (err, hashedPassword) => {

                        const newUsersModel = new UsersModel(formData);

                        // Step 3) Replace the original password with hash
                        newUsersModel.password = hashedPassword;

                        // Step 4) Save user data to database (with encrypted password)
                        newUsersModel.save(
                            (err, dbResult) => {

                                // If something goes wrong, send error
                                if(err) {
                                    res.send(err);
                                }
                                // Otherwise, send success message
                                else {
                                    res.send("User has been saved");
                                }
                            }
                        );

                    }
                )
            }
        );



        

        
    }
);

// /login
router.post(
    '/login',
    (req, res) => {

        // npm packages: passportjs, passportjwt, jsonwebtoken

        // Step 1. Capture formData (email & password)
        // Step 2a. In database, find account that matches email
            // Step 2b. If email NOT match, reject the login request
        // Step 3. If there's matching email, examine the document's password
        // Step 4. Compare the encrypted password in db with incoming password
        // Step 5a. If the password matches, generate web token (JWT)
            // Step 5b. If password NOT match, reject login request
        // Step 6. Send the JWT to the client
    }
)

module.exports = router;