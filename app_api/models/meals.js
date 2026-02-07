const mongoose = require('mongoose');

// define meals schema
const mealsSchema = new mongoose.Schema({
    code: {type: String, required: true, trim: true},
    name: {type: String, required: true, trim: true},
    image: {type: String, required: true, trim: true},
    overview: {type: String, required: true, trim: true}
});

const Meals = mongoose.model('meals', mealsSchema);
module.exports = Meals;