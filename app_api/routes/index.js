const express = require("express");
const router = express.Router();

// import controllers to route
const tripsController = require("../controllers/trips");
const roomsController = require("../controllers/rooms");
const newsController = require("../controllers/news");
const mealsController = require("../controllers/meals");
const homeController = require("../controllers/home");
const contactController = require("../controllers/contact");
const aboutController = require("../controllers/about");

// define route for our trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) // GET Method routes tripList
    .post(tripsController.tripsAddTrip); // POST Method Adds a Trip

// GET Method routes TripsFindByCode: @param - code
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip); // PUT method routes tripsUpdateTrip- requires parameter

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