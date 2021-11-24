const db = require("../database/models");
const op = db.Sequelize.Op;

let postController = {
  detail: function (req, res, next) {
    db.Post.findByPk(req.params.id, {
      include: [
        {
          association: "comments",
          include: {
            association: "user",
          },
        },

        { association: "user" },
      ],
      order:[['comments','id', 'desc']]
    }).then((post) => {
      res.render("detallePost", { title: "detallePost", data: post });
    });
  },
  addPost: function (req, res, next) {
    if (!req.session.user) {
      res.redirect("/users/login");
    }
    res.render("agregarPost", { title: "agregarPost" });
  },
  create: function (req, res, next) {
    if (req.file)
      req.body.img = (req.file.destination + req.file.filename).replace(
        "public",
        ""
      );
    db.Post.create({
      ...req.body,
      user_id: req.session.user.id,
    })
      .then((post) => {
        console.log(post);
        res.redirect("/");
      })
      .catch((error) => {
        return res.render(error);
      });
  },
  search: function (req, res, next) {
    res.render("index", { title: "index" });
  },
  delete: function (req, res, next) {
    db.Post.findByPk(req.params.id, {
      include: [
        {
          association: "comments",
          include: {
            association: "user",
          },
        },

        { association: "user" },
      ],
      
    })
      .then((post) => {
        if (post.user.id == req.body.userId) {
          db.Post.destroy({ where: { id: req.params.id } });
        }
        res.redirect("/");
      })
      .catch((error) => {
        return res.render(error);
      });
  },
  edit: function (req, res) {
    db.Post.findByPk(req.params.id).then((data) => {
      if (!data) {
        res.redirect("/");
      } else if (data.user_id != req.session.user.id) {
        res.redirect("/");
      } else {
        res.render("editarPost", { title: "editar post", post: data });
      }
    });
  },
  update: function (req, res) {
    if (req.file)
      req.body.img = (req.file.destination + req.file.filename).replace(
        "public",
        ""
      );
    db.Post.update(req.body, { where: { id: req.params.id } })
      .then((post) => {
        res.redirect("/");
      })
      .catch((error) => {
        return res.render(error);
      });
  },
  comment: function (req, res) {
    if (!req.session.user) {
      res.redirect("/users/login");
    }
    db.Comment.create({
      post_id: req.body.post_id,
      user_id: req.session.user.id,
      content: req.body.content
    })
      .then((post) => {
        res.redirect("/posts/detail/" + req.body.post_id);
      })
      .catch((error) => {
        return res.render(error);
      });
  },
  like: function (req, res) {
    if (!req.session.user) {
      res.redirect("/posts/detail/" + req.params.id);
    }
    db.Like.create({
      user_id: req.session.user.id,
      post_id: req.params.id,
    })
      .then((like) => {
        res.redirect("/posts/" + req.params.id);
      })
      .catch((error) => {
        return res.send(error);
      });
  },
  dislike: function (req, res) {
    if (!req.session.user) {
      res.redirect("/posts/" + req.params.id);
    }
    db.Like.destroy({
      where: { user_id: req.session.user.id, post_id: req.params.id },
    })
      .then(() => {
        res.redirect("/posts/" + req.params.id);
      })
      .catch((error) => {
        return res.render(error);
      });
  },
  search: function (req, res, next) {
    db.Post.findAll({
      order: [["created_at", "desc"]],
      include: [
        {
          association: "user",
        },
        {
          association: "comments",
          include: { association: "user" },
        },
      ],
      limit: 10,
      where: {
        [op.or]: [
          {
            description: {
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
};

module.exports = postController;
