const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const databaseMiddleware = require("./middlewares/databaseMiddleware");
const PORT = process.env.PORT || 8000;

async function server(mode) {
  const app = express();
  app.listen(PORT, (_) => {
    console.log("Server Running " + PORT);
  });

  try {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(cookieParser);
    app.use(express.static(path.join(__dirname, "src", "public")));
    app.use(databaseMiddleware);

    if (mode == "DEV") {
      app.use(morgan("dev"));
    }
    // settings

    app.set("view engine", "ejs");
  } finally {
    routes(app);
  }
}

module.exports = server;
