// GET about view
const about = (req, res) => {
    res.render('about', {Title: 'Travlr Getaways', activePage: 'about'});
};

module.exports = {about};
