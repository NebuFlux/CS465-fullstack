const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    hero: {
        image: {type: String, required: true, trim: true},
        title: {type: String, required: true, trim: true},
        text: {type: String, required: true, trim: true}
    },
    blogPosts: [{
        title: {type: String, required: true, trim: true},
        date: {type: String, required: true, trim: true},
        excerpt: {type: String, required: true, trim: true},
        url: {type: String, required: true, trim: true}
    }],
    testimony: [{
        author: {type: String, required: true, trim: true},
        quote: {type: String, required: true, trim: true},
        url: {type: String, required: true, trim: true}
    }],
    promos: [{
        url: {type: String, required: true, trim: true},
        image: {type: String, required: true, trim: true}
    }]
});

const Home = mongoose.model('home', homeSchema);
module.exports = Home;