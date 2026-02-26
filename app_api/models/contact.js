const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    address: {type: String, required: true, trim: true},
    phoneNumber: {type: String, required: true, trim: true},
    fax: {type: String, required: true, trim: true}
})

const Contact = mongoose.model('contact', contactSchema);
module.exports = Contact;