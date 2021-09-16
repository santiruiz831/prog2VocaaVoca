const comments = require('../data/commentsData');
const post = require('../data/postData');
let postController = {
    detail: function(req, res, next) {
        res.render('detallePost', {title: 'detallePost', comments: comments.listaComments, post: post.listaPosts});
    },
    addPost: function(req, res, next) {
        res.render('agregarPost', {title: 'agregarPost'});
    }

}

module.exports = postController;