var friends = require("../data/friends");

module.exports = function(app) {

    // GET friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // POST to friends
    app.post("/api/friends", function(req, res) {
        
    });
}