const mongoose = require('mongoose');
const Rooms= require('../models/rooms');
const Model = mongoose.model('rooms');

//GET: /rooms - lists all the rooms
// Response forces HTML status code and JSON 
// message to the requiresting client
const roomList = async(req, res) =>  {
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

// GET: /rooms/:roomCode - lists a single room
// Response forces HTML status code and JSON 
// message to the requiresting client
const roomsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.roomCode})
        .exec();

        // Uncomment to show query results on console
        // console.log(q);

    if(!q)
    {
        return res.status(404).json(err);
    } else {
        return res.status(200).json(q);
    }
};

module.exports = {roomList, roomsFindByCode};