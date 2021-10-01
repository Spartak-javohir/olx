module.exports = (app) => {
  app.get("/", (req, res) => {
    req.rendir("Home");
  });
};
