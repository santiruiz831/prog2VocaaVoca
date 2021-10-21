const db = require('../data/usersData');
const postData = require('../data/postData');
const models = require('../database/models')

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
    login: function(req, res) {
        res.render('login', {title: 'login'});
    }
}

module.exports = userController;