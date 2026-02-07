// api endpoint
const roomsEndpoint = 'http://localhost:3000/api/rooms';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

// GET rooms view
const accomidations = async (req, res, next) => {
    // console.log('rooms controller begin');
    await fetch(roomsEndpoint, options)
        .then((res) => res.json())
        .then((json) => {
            let message = null;
            if (!(json instanceof Array)) {
                message = "API lookup error for rooms";
                json = [];
            } else {
                if (!json.length){
                    message = "No rooms exist in our databse!";
                }
            }
            // console.log(json);
            res.render('rooms', {
                title: "Travlr Getaways", 
                activePage: 'rooms', 
                rooms: json,
                message
            });
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {accomidations};
