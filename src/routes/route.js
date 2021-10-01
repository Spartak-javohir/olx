module.exports = (server) => {
  server.get("/", (req, res) => {
    req.rendir("Home");
  });
};
