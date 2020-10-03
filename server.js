const express = require ("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000; 

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


//mongodb+srv://Mssanoko-admin:<Anoko228>@cluster0.ncnsk.mongodb.net/<workout>?retryWrites=true&w=majority
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Mssanoko-admin:Mssanoko@cluster0.ncnsk.mongodb.net/<workout>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("workouts");
  // perform actions on the collection object
  client.close();
});
mongoose.connect(process.env.MONGODB_ATLAS_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false });

//Get the default connection
var dataBase = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
dataBase.on("error", console.error.bind(console,"MongoDB connection error:"));

// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
    console.log(`App running on link http://localhost:3000`);
  });