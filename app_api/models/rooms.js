const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    code: {type: String, required: true, index: true},
    name: {type: String, required: true, trim: true},
    image: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    rate: {type: String, required: true, trim: true}
})

const Rooms = mongoose.model('rooms', roomSchema);
module.exports = Rooms;