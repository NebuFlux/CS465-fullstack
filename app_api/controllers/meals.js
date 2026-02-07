const mongoose = require('mongoose');
const Meals= require('../models/meals');
const Model = mongoose.model('meals');

//GET: /meals - gets the list of meals
// Response forces HTML status code and JSON 
// message to the requiresting client
const mealsList = async(req, res) =>  {
    const q = await Model
        .find({})
        .exec();

        // Uncomment to show query results on console
        // console.log(q);

    if(!q)
    {   // Database returned no data
        return res.status(404).json(err);
    } else { //Return result list
        return res.status(200).json(q);    
    }
};

module.exports = {mealsList};