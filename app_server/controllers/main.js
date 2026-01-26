const fs = require('fs');
const homePage = JSON.parse(fs.readFileSync('./data/home.json', 'utf-8'));

/* GET homepage */
const index = (req, res) => {
    res.render('index', {title: "Travlr Getaways", activePage: 'index', homePage});
};

module.exports = {index};
