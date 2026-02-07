const express = require('express');
const router = express.Router();
const controller = require('../controllers/rooms');

// GET Rooms page
router.get('/', controller.accomidations);

module.exports = router;
