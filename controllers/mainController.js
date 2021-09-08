const db = require('../data/data');

let mainController = {
    index: function(req, res, next) {
        res.render('index', { title: 'Voca a Voca' , data: db});
    },
    search: function(req, res, next) {
        res.render('resultadoBusqueda', { title: 'resultado' });
    }


}

module.exports = mainController;