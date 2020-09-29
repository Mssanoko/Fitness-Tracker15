const express = require ("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000; 

const app = express();

app.use(logger("dev"));

mongoose.connect(process.env.MONGODB_ATLAS_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var db = mongoose.connection;

db.on("error", console.error.bind(console,"MongoDB connection error:"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
    console.log(`App running on link http://localhost:3000`);
  });