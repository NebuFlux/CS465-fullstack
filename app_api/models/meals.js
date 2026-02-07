const mongoose = require('mongoose');

const mealsSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    image: {type: String, required: true, trim: true},
    overview: {type: String, required: true, trim: true}
});

const Meals = mongoose.model('meals', mealsSchema);
module.exports = Meals;