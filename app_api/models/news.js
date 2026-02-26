const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    latestNews: [{
        url: {type: String, required: true, trim: true},
        title: {type: String, required: true, trim: true}
    }],
    vacationTips: [{
        url: {type: String, required: true, trim: true},
        title: {type: String, required: true, trim: true}
    }],
    newsArticle: {
        image: {type: String, required: true, trim: true},
        title: {type: String, required: true, trim: true},
        date: {type: String, required: true, trim: true},
        author: {type: String, required: true, trim: true},
        paragraphs: [String]
    }
});

const News = mongoose.model('news', newsSchema);
module.exports = News;