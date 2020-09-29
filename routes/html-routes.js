const path = require("path");

//HTML routes
module.exports = (app) => {
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/exercice", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/exercice.html"));
    });
    app.get("/stats", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}