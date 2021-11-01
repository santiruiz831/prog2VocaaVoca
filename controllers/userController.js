const postData = require('../data/postData');
const models = require('../database/models')
const bcrypt = require('bcryptjs');
const db = require('../database/models');

let userController = {
    profile: function(req, res) {
    models.User.findByPk(req.params.id, {
        include: [{association:'posts'},{association:'comments'}]
    }).then(user => {
        //res.send(user)
        res.render('miPerfil', {title: 'perfil', data: user});
    })        
    },
    editProfile: function(req, res) {
        res.render('editarPerfil', {title: 'editarPerfil'});
    },
    register: function(req, res) {
        res.render('registracion', {title: 'registrarse'});
    },
    store: function(req, res) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
           models.User.create({...req.body})
           .then(user => {
             console.log(user)
             res.redirect('/users/login');
           }).catch(error => {
             return res.render(error);
           })
        },
      login: async function(req, res, next) {
        if (req.method == 'POST') {
          const user = await models.User.findOne({ where: {mail: req.body.email}});
          if (!user) {
            res.send('NO EXISTE EL USUARIO')
          }
          if (bcrypt.compareSync(req.body.password, user.password)) {
            req.session.user = user;
            res.cookie('user', user, { maxAge: 1000 * 60 * 60 * 24 * 30 })
            res.redirect('/');
          } else {
            res.send('LA CONSTRASEÑA ES INCORRECTA')
          }
        } else {
          res.render('login', {title: 'login'});
        }
      },    
    logout: function(req, res, next) {
      res.clearCookie('user');
      req.session.user = null;
      res.redirect('/');
    },
      search: async function(req, res, next) {
        const posts = await models.Post.findAll({ where: {
          [op.or]: [
            { content: { [op.like]: "%"+req.query.criteria+"%"} },
            { image: { [op.like]: "%"+req.query.criteria+"%"} },
          ]
          }}
        )
  
        // []
        res.render('search', { posts, criteria: req.query.criteria });
      },
}

module.exports = userController;