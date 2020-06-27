// Importing express inside your server
const express = require('express');
// Import mongoose inside server
const mongoose = require('mongoose');
// Import body-parser
const bodyParser = require('body-parser');

// Import routes
const ProductsRoutes = require('./routes/ProductsRoutes');
const FeedsRoutes = require('./routes/FeedsRoutes');
const UsersRoutes = require('./routes/UsersRoutes');

// Create the server object
const server = express();

// Configure express to use body-parser
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());


// Enter your database connection URL
const dbURL = "mongodb+srv://admin01:db12345@cluster0-oikl7.mongodb.net/test_june2020?retryWrites=true&w=majority";

mongoose.connect(
    dbURL,
    {
        'useNewUrlParser': true,
        'useUnifiedTopology': true
    }
).then(
    ()=>{
        console.log('You are connected MongoDB');
    }
).catch(
    (e)=>{
        console.log('catch', e);
    }
);

server.use(
    '/products',
    ProductsRoutes
);

server.use(
    '/feeds',
    FeedsRoutes
);

server.use(
    '/users',
    UsersRoutes
);

// Create a route for the landing page
server.get(
    '/',
    (req, res) => {
        res.send(
            "<h1>Welcome to MyCars.com</h1>" +
            "<a href='/about'>About</a>"
            );
    }
);

// Route for 404
server.get('*', (req, res)=> {
    res.send('404! Page not found :(')
});


// Connect to port (range 3000 - 9999)
// http://127.0.0.1:8080 (aka http://localhost:8080)
server.listen( 
    8080, ()=>{
        console.log('You are connected http://127.0.0.1:8080!');
    }
);