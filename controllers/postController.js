const comments = require('../data/commentsData');
let models = require('../database/models')
let postController = {
    detail: function(req, res, next) {
        models.Post.findByPk(req.params.id, {
            include: [{
            association:'comments',
            include: {
                association:"user"
            }
        },

            {association:'user',
            
        }]
        }).then(post => {
            res.render('detallePost', {title: 'detallePost', data: post});

        }) 
    },
    addPost: function(req, res, next) {
        res.render('agregarPost', {title: 'agregarPost'});
    },
    create: function(req, res, next) {
        res.render('agregarPost', {title: 'agregarPost'});
    },
    search: function(req, res, next) {
        res.render('index', {title: 'index'});
    },
    delete: function(req, res, next) {
        res.render('detallePost', {title: 'detallePost'});
    },
    edit: function(req, res, next) {
        res.render('detallePost', {title: 'detallePost'});
    },

}

module.exports = postController;