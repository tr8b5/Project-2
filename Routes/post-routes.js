// This helps us so we can use other routes.
var path = require("path");

var db = require(".../models");


module.exports = function(app) {
    app.get("/api/posts", function(req, res) {
        var query = {};
        if (req.query.clubSocial_db) {
          query.clubSocial_db = req.query.clubSocial_db;
        

}
