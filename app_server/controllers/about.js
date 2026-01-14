// GET about view
const about = (req, res) => {
    res.render('about', {Title: 'Travlr Getaways'});
};

module.exports = {about};
