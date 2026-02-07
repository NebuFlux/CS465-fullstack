// api endpoint
const newsEndpoint = 'http://localhost:3000/api/news';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

// GET news data
const news = async (req, res, next) => {
    // console.log('TRAVEL CONTROLLER BEGIN');

    // fetch news data from api asynchronously
    await fetch(newsEndpoint, options)
        // chain converting response to json
        .then((res) => res.json())
        // chain response validation
        .then( (json) => {
            // create error message
            let message = null;
            if (!(json instanceof Object)) {
                message = "API lookup error";
                json = {};
            } else {
                if (!Object.keys(json).length){
                    message = "no news exist in our database"
                }
            }
            
            res.render('news', {
                Title: "Travlr Getaways", 
                activePage: 'news', 
                newsData: json,
                message
            });
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {news};
