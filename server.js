//Require express
const express = require("express");

//Create an instance of express
const app = express();

//Create a PORT
const PORT = process.env.PORT || 8080;

//Add middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Listen on the PORT
app.listen(PORT, function () {
  console.log(`App listening on PORT: http://localhost:${PORT}`);
});
