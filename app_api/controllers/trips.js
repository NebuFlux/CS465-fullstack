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
        return res.status(404).json({message: "No Trips found!"});
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
        return res.status(404).json({message: "Trip not found!"});
    } else { //Return result list
        return res.status(200).json(q);    
    }
};

// POST: /trips - Adds a new Trip
// Regardless of outcome, response must include HTML, status code
// and JSON message to the requesting client
const tripsAddTrip = async(req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

    if(!q){
        // Database returned no data
        return res
            .status(400)
            .json({message: "failed to create trip"});
    } else { // Return new trip
        return res
            .status(201)
            .json(q);
    }
}

// PUT: /trips/:tripCode - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async(req, res) => {
    //uncomment for debugging
    //console.log(req.params);
    //console.log(req.body);

    const q = await Model
        .findOneAndUpdate(
            { 'code' : req.params.tripCode},
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            }
        ).exec();

    if(!q){
        // Database returned no data
        return res.status(404).json({message: "Trip not found!"});
    }else{
        return res.status(200).json(q);
    }
    // Uncomment to show results of operation
    //console.log(q);
}

const tripsDeleteTrip = async(req, res) =>{
    try{
        const q = await Model
        .findOneAndDelete({'code': req.params.tripCode})
        .exec();

        if(!q){
            // Database couldn't find any records
            return res.status(404).json({message: "Trip not found!"});
        } else {
            return res.status(200).json(q);
        }
    }catch(err){
        console.error("Delete trip failed:", {
            message: err.message,
            stack: err.stack,
            name: err.name,
            code: err.code,           // MongoDB error code if present
            fullError: err            // sometimes helpful to see the whole object
        });
        return res.status(500).json(err);
    }
}

module.exports = {
    tripsList, 
    tripsFindByCode, 
    tripsAddTrip, 
    tripsUpdateTrip,
    tripsDeleteTrip};