const mongoose = require('mongoose');
const News= require('../models/news');
const Model = mongoose.model('news');

//GET: /news - gets the single news document
// Response forces HTML status code and JSON 
// message to the requiresting client
const newsData = async(req, res) =>  {
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

module.exports = {newsData};