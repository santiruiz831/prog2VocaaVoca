let mainController = {
    index: function(req, res, next) {
        res.render('index', { title: 'Voca a Voca' });
    }

}

module.exports = mainController;