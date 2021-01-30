// This helps us so we can use other routes.
var path = require("path");

var db = require(".../models");


module.exports = function(app) {
    //  A route for all the posts
    app.get("/api/posts", function(req, res) {
        var query = {};
        if (req.query.clubSocial_id) {
          query.clubSocialID = req.query.clubSocial_id;
        
        }

    
db.Post.findAll({
    where: query,
    include: [db.clubSocial_db]
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});







}
