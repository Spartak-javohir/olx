require("dotenv").config();

const app = require("./src/server");

app(process.env.Mode);
