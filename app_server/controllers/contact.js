// GET contact view
const contact = (req, res) => {
    res.render('contact', {Title: "Travlr Getaways", activePage: 'contact'});
};

module.exports = {contact};
