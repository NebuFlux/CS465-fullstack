const homeEndpoint = 'http://localhost:3000/api/home';
const options = {
    method: 'GET',
    header: {'Accept': 'application/json'}
}

/* GET homepage */
const index = async (req, res, next) => {
    await fetch(homeEndpoint, options)
        .then((res) => res.json())
        .then((json) => {
            let message = null;
            if (!(json instanceof Object)){
                message = 'API lookup error';
                json = {};
            } else {
                if (!Object.keys(json).length){
                    message = 'No data sorry!';
                }
            }
            res.render('index', {
                title: "Travlr Getaways", 
                activePage: 'index', 
                homePage: json,
                message
            });
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {index};
