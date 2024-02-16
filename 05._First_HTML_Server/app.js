const express = require("express");
const app = express();

console.log(__dirname); // __ Dunder - double under

const directory = __dirname;

app.get("/", (req, res) => {
  res.sendFile(directory + "/public/homepage/homepage.html");
});

app.get("/publicSquare", (req, res) => {
  res.sendFile(directory + "/public/publicSquare/publicSquare.html");
});

const port = 8080;
app.listen(port, () => console.log("Server is running on port", port));
