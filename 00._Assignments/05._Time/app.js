const express = require("express");
const app = express();

const date = new Date();
const directory = __dirname;

const day = new Intl.DateTimeFormat("da-DK", {
  dateStyle: "full",
}).format(date);

app.get("/", (req, res) => {
  res.sendFile(directory + "/public/homepage.html");
});

app.get("/dates", (req, res) => {
  res.send({ data: day });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port: ", PORT));
