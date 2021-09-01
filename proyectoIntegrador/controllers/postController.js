let postController = {
    detail: function(req, res, next) {
        res.render('detallePost', {title: 'detallePost'});
    }

}

module.exports = postController;