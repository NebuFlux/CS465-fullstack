const fs = require('fs');
const contactDetails = JSON.parse(fs.readFileSync('./data/contact-info.json', 'utf-8'));

// GET contact view
const contact = (req, res) => {
    res.render('contact', {Title: "Travlr Getaways", activePage: 'contact', contactDetails});
};

module.exports = {contact};
