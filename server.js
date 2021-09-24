require("dotenv").config();

const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const PORT = process.env.PORT || 8080;

async function server() {
  const server = express();

  server.use(express.json());
  server.use(express.urlencoded());
  server.use(morgan("dev"));
  server.use(cookieParser);
  serve.use(express.static(path.join(__dirname, "src", "public")));
}

server.listen(PORT);
