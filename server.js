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

//Require controllers
const postController = require("./controllers/postController");

//Use controllers
app.use(postController);

//Listen on the PORT
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
