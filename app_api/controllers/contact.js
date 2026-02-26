const mongoose = require('mongoose');
const Contact= require('../models/contact');
const Model = mongoose.model('contact');

//GET: /contact - gets the contact data
// Response forces HTML status code and JSON 
// message to the requiresting client
const contactData = async(req, res) =>  {
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

module.exports = {contactData};