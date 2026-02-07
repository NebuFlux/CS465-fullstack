// api endpoint and options
const mealsEndpoint = 'http://localhost:3000/api/meals';
const options = {
    method: 'GET',
    headers:{'Accept': 'application/json'}
}

// GET meals view
const meals = async (req, res, next) => {
    console.log('MEALS CONTROLLER BEGIN');
    await fetch(mealsEndpoint, options)
        .then((res) => res.json())
        .then((json) => {

            let message = null;
            if (!(json instanceof Array)){
                message = "API lookup error!";
                json = [];
            } else {
                if (!json.length){
                    message = "no meals in our database";
                }
            }
            console.log(json);
            res.render('meals', {
                Title: "Travlr Getaways", 
                activePage: 'meals', 
                food: json,
                message
            });
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {meals};
