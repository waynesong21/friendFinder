var path = require("path");

var friendsData = require("../data/friends");

module.exports = function(app) {

    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
        res.json(true);
    });
};