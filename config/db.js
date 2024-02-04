const mongoose = require("mongoose");
const config = require("../config/config");

const dbURL = config.db.url;

mongoose
  .connect(dbURL)
  .then(() => console.log("DB is connected"))
  .catch((error) => {
    console.log("Not connected");
    process.exit(1);
  });
