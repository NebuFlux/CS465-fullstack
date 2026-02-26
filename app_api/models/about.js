const mongoose = require('mongoose');

// Define About schema
const aboutSchema = new mongoose.Schema({
    mainArticle: {
        title: {type: String, required: true, trim: true},
        paragraphs: [String]
    },
    ads:[{
        title: {type: String, required: true, trim: true},
        description: {type: String, required: true, trim: true}
    }],
    subArticles:[{
        title: {type: String, required: true, trim: true},
        details: {type: String, required: true, trim: true}
    }]
})

const About = mongoose.model('about', aboutSchema);
module.exports = About;