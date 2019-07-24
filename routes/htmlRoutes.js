var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/hub", function(req, res) {
    db.UserData.findAll({}).then(function(dbExamples) {
      res.render("hub", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/rps", function(req, res) {
    db.UserData.findAll({}).then(function(dbExamples) {
      res.render("rps", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/collector", function(req, res) {
    db.UserData.findAll({}).then(function(dbExamples) {
      res.render("collector", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
