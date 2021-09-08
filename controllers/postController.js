let postController = {
    detail: function(req, res, next) {
        res.render('detallePost', {title: 'detallePost'});
    },
    addPost: function(req, res, next) {
        res.render('agregarPost', {title: 'agregarPost'});
    }

}

module.exports = postController;