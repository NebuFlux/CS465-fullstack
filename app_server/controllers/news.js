// GET news view
const news = (req, res) => {
    res.render('news', {Title: "Travlr Getaways"});
};

module.exports = {news};
