const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json','utf-8'));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', {title: 'Travlr Getaways', activePage:'travel', trips});
};

module.exports = {travel};
