const aboutEndpoint = 'http:localhost:3000/api/about';
const options = {
    method: 'GET',
    header: {
        'Accept': 'application/json'
    }
}

// GET about view
const about = async (req, res, next) => {
    await fetch(aboutEndpoint, options)
        .then((res) => res.json())
        .then((json) => {
            let message = null;
            if (!(json instanceof Object)){
                message = 'API lookup error';
                json = {};
            } else {
                if (!Object.keys(json).length){
                    message = 'No about data!'
                }
            }
            res.render('about', {
                Title: 'Travlr Getaways', 
                activePage: 'about', 
                aboutTravlr: json,
                message
            });
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {about};
