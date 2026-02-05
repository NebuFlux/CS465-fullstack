// Connect DB and Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// Get seed data
const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// delete existing records and insert seed data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

// Close db connection and exit
seedDB().then( async () => {
    await Mongoose.connection.close();
    process.exit(0);
});