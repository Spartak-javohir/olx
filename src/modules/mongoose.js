const mongoose = require("mongoose");

async function mongo() {
  try {
    await mongoose.connect(process.env.Mongo_URL);
  } catch (error) {
    console.error("MONGOERROR:", error + "");
  }
}

module.exports = mongo;
