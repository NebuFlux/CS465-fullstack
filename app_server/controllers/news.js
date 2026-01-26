const fs = require('fs');
const newsData = JSON.parse(fs.readFileSync('./data/news.json', 'utf-8'));

// GET news view
const news = (req, res) => {
    res.render('news', {Title: "Travlr Getaways", activePage: 'news', newsData});
};

module.exports = {news};
