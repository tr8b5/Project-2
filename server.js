
//Require express
const express = require("express");
const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

//Create an instance of express
const app = express();

//Create a PORT
const PORT = process.env.PORT || 8080;

//Require models
const db = require("./models");

//Add middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes and give the server access to them
const routes = require("./controllers/postController");

app.use(routes);

//Listen on the PORT
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Listening on PORT http://localhost:${PORT}`)
  );
});
