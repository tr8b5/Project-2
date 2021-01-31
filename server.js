//Require express
const express = require("express");

//Create an instance of express
const app = express();

//Create a PORT
const PORT = process.env.PORT || 8080;

//Require models
const db = require("./models");

//Add middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Require API routes
app.get("/api/posts", (req, res) => {
  db.Post.findAll().then((allPosts) => {
    console.log(allPosts);
    res.json(allPosts);
  });
});

app.get("/api/posts/:id", (req, res) => {
  db.Post.findOne({ where: { id: req.params.id } }).then((foundPost) => {
    console.log(foundPost);
    res.json(foundPost);
  });
});

app.post("/api/posts", (req, res) => {
  db.Post.create({
    school: req.body.school,
    subject: req.body.subject,
    post: req.body.post,
    votes: req.body.votes,
  }).then((newPost) => {
    console.log(newPost);
    res.json(newPost);
  });
});

app.put("/api/posts/:id", (req, res) => {
  db.Post.update({
    school: req.body.school,
    subject: req.body.subject,
    post: req.body.post,
    votes: req.body.votes,
  }).then((updatedPost) => {
    console.log(updatedPost);
    res.json(updatedPost);
  });
});

app.delete("/api/posts/:id", (req, res) => {
  db.Post.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    console.log("Post deleted.");
    res.end();
  });
});

//Require Views routes
const viewsRoutes = require("./");

//Listen on the PORT
app.listen(PORT, function () {
  console.log(`App listening on PORT: http://localhost:${PORT}`);
});
