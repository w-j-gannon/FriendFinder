var path = require("path");

module.exports = function(req, res) {
    // survey page GET
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    // home page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "..public/home.html"));
    })
}