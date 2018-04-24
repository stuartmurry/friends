module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("home.html");
  });

  app.get("/home", (req, res) => {
    res.render("home.html");
  });

  app.get("/survey", (req, res) => {
    res.render("survey.html");
  });
};
