// uncomment the following 2 lines to read info from json file
// const fs = require('fs');
// const trips = JSON.parse(fs.readFileSync('./data/trips.json','utf-8'));

// api endpoint
const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

/* GET travel view */
const travel =  async (req, res, next) => {
    //console.log('TRAVEL CONTROLLER BEGIN');
    await fetch(tripsEndpoint, options)
        .then((res) => res.json())
        .then((json) => {
            let message = null;
            if (!(json instanceof Array)) {
                message = "API lookup error";
                json = [];
            } else {
                if (!json.length){
                    message = "No trips exist in our database!";
                }
            }
            //console.log(json);
            res.render('travel', {
                title: 'Travlr Getaways', 
                activePage:'travel', 
                trips: json,
                message
            });
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {travel};
