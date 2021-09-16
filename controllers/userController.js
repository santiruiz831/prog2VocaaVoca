const db = require('../data/usersData');
const postData = require('../data/postData');

let userController = {
    profile: function(req, res) {
        res.render('miPerfil', {title: 'perfil', data: db, postInfo: postData.listaPosts});
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