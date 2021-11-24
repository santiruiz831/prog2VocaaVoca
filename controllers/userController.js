const postData = require("../data/postData");
const bcrypt = require("bcryptjs");
const db = require("../database/models");
const op = db.Sequelize.Op;

let userController = {
  detalle: async function (req, res) {
    const user = await db.User.findByPk(req.params.id, {
      include: [{ all: true }],
      order: [["posts", "id", "desc"]],
    });

    res.render("miPerfil", { user });
  },
  profile: function (req, res) {
    let data = db.User.findByPk(req.params.id, {
      include: [{ all: true }],
    }).then((data) => {
      res.render("miPerfil", { title: "perfil", data: data });
    });
  },
  editProfile: function (req, res) {
    db.User.findByPk(req.params.id).then((user) => {
      user.password = res.render("editarPerfil", {
        title: "editarPerfil",
        user: user,
      });
    });
  },
  storeEdit: function (req, res) {
    if (req.body.password.length == 0) {
      db.User.findByPk(req.body.id).then((user) => {
        req.body.password = user.password;
      });
    } else {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }
    db.User.update({ ...req.body }, { where: { id: req.body.id } })
      .then((user) => {
        console.log(user);
        res.redirect(`/users/profile/${req.body.id}`);
      })
      .catch((error) => {
        return res.render(error);
      });
  },
  register: function (req, res) {
    res.render("registracion", { title: "registrarse", error:null });
  },
  store: function (req, res) {
    if (req.file) {
      req.body.img = (req.file.destination + req.file.filename).replace(
        "public",
        ""
      );
    }
    db.User.findOne({
      where: [
        {
          mail: req.body.mail,
        },
      ],
    }).then((user) => {
      if (!user) {
        if(req.body.password.length<=3){
          res.render("registracion", { error: "Esta contraseña es muy corta" });

        }
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        db.User.create({
          ...req.body,
        }).then((user) => {
          console.log(user);
          res.redirect("/users/login");
        });
      } else {
        res.render("registracion", { error: "Ese mail ya ha sido registrado" });
      }
    });
  },
  login: async function (req, res, next) {
    if (!req.session.user) {
      if (req.method == "POST") {
        const user = await db.User.findOne({
          where: { mail: req.body.mail },
        });
        if (!user) {
          res.send("EL MAIL INGRESADO NO CORRESPONDE A NINGUN USUARIO");
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
          req.session.user = user;
          res.cookie("user", user, { maxAge: 1000 * 60 * 60 * 24 * 30 });
          res.redirect("/");
        } else {
          res.send("LA CONSTRASEÑA ES INCORRECTA");
        }
      } else {
        res.render("login", { title: "login" });
      }
    } else {
      res.redirect("/");
    }
  },
  logout: function (req, res, next) {
    res.clearCookie("user");
    req.session.user = null;
    return res.redirect("/");
  },
  search: function (req, res, next) {
    db.User.findAll({
      order:[["name", 'desc']],
      include: [{ all: true }],
      limit: 10,
      where: {
        [op.or]: [
          {
            name: {
              [op.like]: "%" + req.query.text + "%",
            },
          },
        ],
      },
    }).then((posteos) => {
      if (posteos.length > 0) {
        res.render("resultadoBusqueda", {
          title: "Voca a Voca",
          data: posteos,
          search: "Mostrando resultados para:" + req.query.text,
        });
      } else {
        res.render("resultadoBusqueda", {
          title: "Voca a Voca",
          data: posteos,
          search: "No hay resultados para:" + req.query.text,
        });
      }
    });
  },
  follow: function (req, res) {
    if (!req.session.user) {
      res.redirect("/users/" + req.params.id);
    }
    db.Follow.create({
      follower_id: req.session.user.id,
      following_id: req.params.id,
    }).then(async function () {
      const user = await db.User.findByPk(req.params.id, {
        include: [{ all: true }],
        order: [["posts", "id", "desc"]],
      });
      res.render("miPerfil", { data: user });
    });
  },
  unfollow: function (req, res) {
    if (!req.session.user) {
      res.redirect("/users/" + req.params.id);
    }
    db.Follow.destroy({
      where: { follower_id: req.session.user.id, following_id: req.params.id },
    })
      .then(async function () {
        const user = await db.User.findByPk(req.params.id, {
          include: [{ all: true }],
          order: [["posts", "id", "desc"]],
        });
        res.render("miPerfil", { data: user });
      })
      .catch((error) => {
        return res.render(error);
      });
  },
};

module.exports = userController;
