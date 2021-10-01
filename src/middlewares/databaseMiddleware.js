const database = require("../modules/mongoose");

module.exports = async function databaseMiddleware(req, res, next) {
  const db = await database();
  req.db = db;
  next();
};
