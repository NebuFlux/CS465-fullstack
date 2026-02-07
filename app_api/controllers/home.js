const mongoose = require('mongoose');
const Home= require('../models/home');
const Model = mongoose.model('home');

//GET: /home - gets the home page data
// Response forces HTML status code and JSON 
// message to the requiresting client
const homeData = async(req, res) =>  {
    const q = await Model
        .findOne({})
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

module.exports = {homeData};