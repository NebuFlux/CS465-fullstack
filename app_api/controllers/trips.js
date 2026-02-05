const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

//GET: /trips - lists all the trips
// Response forces HTML status code and JSON 
// message to the requiresting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
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

//GET: /trips/:tripCode - lists a single trip
// Response forces HTML status code and JSON 
// message to the requiresting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) // Return single record
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

module.exports = {tripsList, tripsFindByCode};