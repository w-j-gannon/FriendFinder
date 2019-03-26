var friends = require("../data/friends");

module.exports = function(app) {

    // GET friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // POST to friends
    app.post("/api/friends", function(req, res) {
        
        // incoming quiz
        var newFriend = req.body;
        // lowest score differential
        var lowDiff = Number.MIN_SAFE_INTEGER;
        // best friend object to be sent
        var bestFriend = null;

        // for each friend in the friends object...
        friends.forEach(function(friend) {

            // the diff between incoming and each friend
            var quizDiff = 0;

            // grab each score...
            friend.scores.forEach(function(score, index) {

                // and add up the absolute diff to each answer and the users answer
                quizDiff += Math.abs(score - newFriend.scores[index]);

                console.log(quizDiff);
            });

            // if the diff is the lowest so far ...
            if (quizDiff < lowDiff) {
                // set the lowDiff to that individual diff
                lowDiff = quizDiff;
                // and that friend becomes the bestFriend
                bestFriend = friend;
            }
            console.log(bestFriend);
        });

        // push each newFriend to the friends array
        friends.push(newFriend);

        // send back the best friend
        res.json(bestFriend);
    });
}