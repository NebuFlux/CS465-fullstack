// GET meals view
const meals = (req, res) => {
    res.render('meals', {Title: "Travlr Getaways"});
};

module.exports = {meals};
