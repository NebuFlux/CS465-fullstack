// Connect DB and Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');
const Rooms = require('./rooms');
const News = require('./news');
const Meals = require('./meals');
const Home = require('./home');
const Contact = require('./contact');
const About = require('./about');

// Get seed data
const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
const rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf-8'));
const news = JSON.parse(fs.readFileSync('./data/news.json', 'utf-8'));
const home = JSON.parse(fs.readFileSync('./data/home.json', 'utf-8'));
const meals = JSON.parse(fs.readFileSync('./data/food.json', 'utf-8'));
const contact = JSON.parse(fs.readFileSync('./data/contact-info.json', 'utf-8'));
const about = JSON.parse(fs.readFileSync('./data/about.json', 'utf-8'));

// delete existing records and insert seed data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
    await Rooms.deleteMany({});
    await Rooms.insertMany(rooms);
    await News.deleteMany({});
    await News.insertOne(news);
    await Meals.deleteMany({});
    await Meals.insertMany(meals);
    await Home.deleteMany({});
    await Home.insertOne(home);
    await Contact.deleteMany({});
    await Contact.insertOne(contact);
    await About.deleteMany({});
    await About.insertOne(about);
};

// Close db connection and exit
seedDB().then( async () => {
    await Mongoose.connection.close();
    process.exit(0);
});