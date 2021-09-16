const db = require('../data/postData');

let mainController = {
    index: function(req, res, next) {
        res.render('index', { title: 'Voca a Voca', data: db.listaPosts });
    },
    search: function(req, res, next) {
        res.render('resultadoBusqueda', { title: 'resultado' });
    }


}

module.exports = mainController;