const contactEndpoint = 'http://localhost:3000/api/contact';
const options = {
    method: 'GET',
    header: {'Accept': 'application/json'}
}

// GET contact view
const contact = async (req, res, next) => {
    await fetch(contactEndpoint, options)
        .then((res) => res.json())
        .then( (json) => {
            let message = null;
            if (!(json instanceof Object)){
                message = 'API lookup error';
                json = {};
            } else {
                if (!Object.keys(json).length){
                    message = 'No Contact Data!';
                }
            }
            res.render('contact', {
                Title: "Travlr Getaways", 
                activePage: 'contact', 
                contactDetails: json,
                message
            });
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {contact};
