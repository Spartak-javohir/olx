const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const databaseMiddleware = require("./middlewares/databaseMiddleware");
const PORT = process.env.PORT || 8000;

async function app(mode) {
  const server = express();
  server.listen(PORT, (_) => {
    console.log("Server Running " + PORT);
  });

  try {
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    server.use(cookieParser);
    server.use(express.static(path.join(__dirname, "src", "public")));
    server.use(databaseMiddleware);

    if (mode == "DEV") {
      server.use(morgan("dev"));
    }
    // settings

    server.set("view engine", "ejs");
  } finally {
    routes(server);
  }
}

module.exports = app;
