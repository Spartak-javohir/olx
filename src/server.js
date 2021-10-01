const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const databaseMiddleware = require("./middlewares/databaseMiddleware");
const PORT = process.env.PORT || 8080;

async function server(mode) {
  const server = express();

  try {
    server.use(express.json());
    server.use(express.urlencoded());

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
