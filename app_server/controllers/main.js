/* GET homepage */
const index = (req, res) => {
    res.render('index', {title: "Travlr Getaways", activePage: 'index'});
};

module.exports = {index};
