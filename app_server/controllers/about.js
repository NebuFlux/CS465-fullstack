const fs = require('fs');
const aboutTravlr = JSON.parse(fs.readFileSync('./data/about.json', 'utf-8'));

// GET about view
const about = (req, res) => {
    res.render('about', {Title: 'Travlr Getaways', activePage: 'about', aboutTravlr});
};

module.exports = {about};
