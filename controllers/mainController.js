const db = require('../data/postData');
let models = require('../database/models')
let mainController = {
    index: function(req, res, next) {
        models.Post.findAll()
        .then(posteos => {
            res.render('index', { title: 'Voca a Voca', data: posteos });
        }) 
        
    },
    search: function(req, res, next) {
        res.render('resultadoBusqueda', { title: 'resultado' });
    }


}

module.exports = mainController;