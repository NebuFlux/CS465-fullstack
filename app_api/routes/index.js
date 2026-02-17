const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken'); // Enable JSON Web Tokens

// import controllers to route
const tripsController = require("../controllers/trips");
const roomsController = require("../controllers/rooms");
const newsController = require("../controllers/news");
const mealsController = require("../controllers/meals");
const homeController = require("../controllers/home");
const contactController = require("../controllers/contact");
const aboutController = require("../controllers/about");
const authController = require("../controllers/authentication");

// define routes for authentication
router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

// define route for our trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) // GET Method routes tripList
    .post(authenticateJWT, tripsController.tripsAddTrip); // POST Method Adds a Trip

// GET Method routes TripsFindByCode: @param - code
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip); // PUT method routes tripsUpdateTrip- requires parameter

// route for rooms endpoint
router.route('/rooms')
    .get(roomsController.roomList);

// GET Method routes RoomsFindByCode: @param-code
router
    .route('/rooms/:roomCode')
    .get(roomsController.roomsFindByCode);

// route news data endpoint
router.route('/news').get(newsController.newsData);

// route meals data endpoints
router.route('/meals').get(mealsController.mealsList);

router
    .route('/meals/:mealCode')
    .get(mealsController.mealFindByCode);

// route home data endpoint
router.route('/').get(homeController.homeData);
router.route('/home').get(homeController.homeData);

// route contact data endpoint
router.route('/contact').get(contactController.contactData);

// route about data endpoint
router.route('/about').get(aboutController.aboutData);

// route index
module.exports = router;


// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
    // console.log('In Middleware');

    const authHeader = req.headers['authorization'];
    // console.log('Auth Header: ' + authHeader);

    if (authHeader == null) {
        console.log('auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if(headers.length < 1) {
        console.log('Not enough tokens in Auth Header: ' + headers.length);
        return res.sendStatus(501);
    }

    const token = authHeader.split(' ')[1];
    // console.log('Token: ' + token);

    if(token == null) {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }

    // console.log(process.env.JWT_SECRET);
    // console.log(jwt.decode(token));

    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if (err) {
            return res.sendStatus(401).json('Token Validation Error!');
        }
        req.auth = verified; // Set the auth parameter to the decoded object
    });
    next(); // We need to continue or this will hang forever.
}