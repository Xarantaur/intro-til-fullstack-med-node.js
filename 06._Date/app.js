const express = require("express");
const app = express();

// definer en dato i javascript:

// UTC  zulu tegn. = Z   <-- standard
console.log(new Date());
//unix epoch time  (seconds since 1970 jan. 1st)
console.log(Date.now());
// local TIme (my pc's local time)
console.log(Date());

currentMonth = new Intl.DateTimeFormat("da-dk", {
  dateStyle: "full",
});
console.log(currentMonth);

// create a route with the endpoint /month
// that returns the current month

app.get("/date", (req, res) => {
  const date = Date();
  res.send({ data: date });
});

app.get("/month", (req, res) => {
  const month = new Date().toLocaleDateString("da-dk", { month: "long" });
  res.send({ data: month });
});

app.get("/month/version3", (req, res) => {
  const monthName = Date().split(" ")[1];
  res.send({ data: monthName });
});

// get today on /day

app.get("/day", (req, res) => {
  const day = new Date().toLocaleDateString("da-dk", { weekday: "short" });
  res.send({ data: day });
});

const PORT = 8080;
app.listen(PORT, () => console.log("server is running on port", PORT));
