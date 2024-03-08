const express = require("express");
const app = express();

app.use(express.static("public")); // gør at klient kan fetche fra public mappen.

/* const helicopterFactoryFile = require/".util/helicopterFactory.js"

 console.log(helicopterFactoryFile.helicopterFactory());  */

console.log(__dirname); // __ Dunder - double under

const directory = __dirname;

app.get("/", (req, res) => {
  res.sendFile(directory + "/public/homepage/homepage.html");
});

app.get("/publicSquare", (req, res) => {
  res.sendFile(directory + "/public/publicSquare/publicSquare.html");
});

app.get("/treasuretrove", (req, res) => {
  res.send({ data: "you found it" });
});

// server side redirection
app.get("/secretpassphrase", (req, res) => {
  if ( req.query.passphrase !== "SesameOpenUp"){
    res.status(400).send({ data: "Wrong PassPhrase" })
  } else{
    res.redirect("/treasuretrove");
  }
})
const knownNames = ["Lars", "Mathias", "Anders"];
// localhost:8080/greeting?name=lars
app.get("/greeting", (req, res) => {
  const providedName = req.params.name;
  if (knownNames.includes(providedName)) {
    res.send({ data: `hello ${providedName}` });
  } else {
    res.send({ data: "Hello stranger" });
  }
});

app.get("/proxy", (req, res) => {
  fetch("https://www.google.com")
    .then((response) => response.text())
    .then((result) => res.send(result));
});

app.get("/knownpeople", (req, res) => {
  res.send({ data: knownNames.length });
});

const port = 8080;
app.listen(port, () => console.log("Server is running on port", port));
