const fs = require('fs');
const roomTypes = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf-8'));

// GET rooms view
const rooms = (req, res) => {
    res.render('rooms', {Title: "Travlr Getaways", activePage: 'rooms', roomTypes});
};

module.exports = {rooms};
