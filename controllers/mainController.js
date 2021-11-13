let models = require('../database/models')


let mainController = {
    index: function(req, res, next) {
        models.Post.findAll({
          order:[
            ['created_at', 'desc']
          ],
            include: [{
                association: 'user'
            },
        {
            association: 'comments',
            include:{association: 'user'}
        }]
        })
        .then(posteos => {
            //res.send(posteos)
            res.render('index', { title: 'Voca a Voca', data: posteos });
        }) 
        
    },
    
    
    like: function(req, res) {
        if (!req.session.user) {
          res.redirect('/posts/'+req.params.id);
        }
        db.Like.create({
          user_id: req.session.user.id,
          post_id: req.params.id 
        }).then(like => {
          res.redirect('/#post_'+req.params.id);
        }).catch(error => {
          return res.send(error);
        })
      },
      dislike: function(req, res) {
        if (!req.session.user) {
          res.redirect('/posts/'+req.params.id);
        }
        db.Like.destroy(
          { where: { user_id: req.session.user.id, post_id: req.params.id }
        })
        .then(() => {
          res.redirect('/#post_'+req.params.id);
        }).catch(error => {
          return res.render(error);
        })
      },


}

module.exports = mainController;