const express = require("express");
const bodyParser = require("body-Parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/aboutUs", function (req, res) {
  res.render("aboutUs");
});

app.get("/calender", function (req, res) {
  res.render("calender");
});

app.listen(3000, function () {
  console.log("Server is up and running  on port 3000");
});
