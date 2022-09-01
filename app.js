const express = require("express");
const path = require("path");
const app = express();

const PORT = 5000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/about.html"));
  //res.send("Hello!");
  //res.render("about.html");
});

app.listen(PORT, () => {
  console.log("server is on!");
});
