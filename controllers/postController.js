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
      models.Post.create({
        ...req.body
      }).then(post => {
        console.log(post);
        res.redirect('/');
      }).catch(error => {
        return res.render(error);
      })
    },
    search: function(req, res, next) {
        res.render('index', {title: 'index'});
    },
    delete: function(req, res, next) {
         // Chequear que sea el owner
      models.Post.destroy({ where: { id: req.params.id }})
      .then(() => {
        res.redirect('/');
      }).catch(error => {
        return res.render(error);
      })
    },
    edit: async function(req, res) {
        const post = await models.Post.findByPk(req.params.id)
        if (!post) {
          return res.render('error');
        }
  
        res.render('posts/edit', {post});
      },
      update: function(req, res) {
        models.Post.update(req.body, { where: { id: req.params.id }}).then(post => {
          res.redirect('/');
        }).catch(error => {
          return res.render(error);
        })
      },
      comment: function(req, res) {
        if (!req.session.user) {
          res.redirect('/posts/'+req.params.id);
        }
        models.Comment.create({
          ...req.body,
          post_id: req.params.id,
          user_id: req.session.user.id
        }).then(post => {
          res.redirect('/posts/'+req.params.id);
        }).catch(error => {
          return res.render(error);
        })
      },
   

}

module.exports = postController;