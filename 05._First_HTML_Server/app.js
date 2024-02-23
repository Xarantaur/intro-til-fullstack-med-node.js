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

const knownNames = ["Lars", "Mathias","Anders"]; 
// localhost:8080/greeting?name=lars 
app.get("/greeting", (req, res) => {
  const providedName = req.params.name;
  if (knownNames.includes(providedName)) {
    res.send({ data: `hello ${providedName}` });
  }else {
    res.send({ data: "Hello stranger"})
  }
});

app.get("/knownpeople", (req, res) => {
  res.send({ data: knownNames.length})
}
)

const port = 8080;
app.listen(port, () => console.log("Server is running on port", port));
