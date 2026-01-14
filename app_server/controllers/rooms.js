// GET rooms view
const rooms = (req, res) => {
    res.render('rooms', {Title: "Travlr Getaways"});
};

module.exports = {rooms};
