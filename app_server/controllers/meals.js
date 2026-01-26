const fs = require('fs');
const food = JSON.parse(fs.readFileSync('./data/food.json', 'utf-8'));
// GET meals view
const meals = (req, res) => {
    res.render('meals', {Title: "Travlr Getaways", activePage: 'meals', food});
};

module.exports = {meals};
