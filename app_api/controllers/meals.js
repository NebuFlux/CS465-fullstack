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

// GET: /meals/:mealCode - retrieves a single meal
// Response forces HTML status code and JSON 
// message to the requiresting client
const mealFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.mealCode})
        .exec();

        // Uncomment to show query results on console
        console.log(q);

    if(!q)
    {
        return res.status(404).json(err);
    } else {
        return res.status(200).json(q);
    }
};

module.exports = {mealsList, mealFindByCode};