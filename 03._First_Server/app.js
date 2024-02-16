const express = require("express");
const app = express(); // importer express og put det på en variabel
//console.log(express)

//const app = express() // instanciere bibliotek.

//console.log(app)

//const app = require("express")();
app.use(express.json()); // giver mening til patch put delete.

// route : dette er en route med endpointet /(slash)
// endpoint
// callback function
// request, response.
app.get("/", (req, res) => {
  res.send({ data: "welcome" });
});
// app.get targer imod to argumenter,  et end point og en callback function

// route : nærmere : en get route
app.get("/secondRoute", (req, res) => {
  res.send({ data: [1, 2, 3, 4] }); // sender et object.
});

app.get("/page", (req, res) => {
  res.send("<h1> Welcome to my Page</h1>");
});

// pathvariable :
app.get("/thirdRoute/:someValue/:someOtherValue", (req, res) => {
  const firstValue = req.params.someValue;
  const secondValue = req.params.someOtherValue;
  console.log(req.params);
  res.send({ route: [3] });
});

let balance = 100;

app.get("/wallet/:paymentOut", (req, res) => {
  const payOut = Number(req.params.paymentOut);

  if (!payOut) res.send({ data: "you have submitted an incorrect amount, not a number" });

  if (balance - payOut < 0) {
    res.send({ data: "sorry, not enough funds." });
  } else {
    balance -= payOut;

    res.send({ data: `Your new balance is ${balance}` });
  }
  // task create a route calld fillUpWallet that allows a client to fill up the wallet with a specifed amount.

  // min egen. hvad gjorde jeg forkert????? LARS
  /* balance = balance - payOut; 
    if(payOut > balance) {
        res.send("Sorry, not enough funds")
    }else{
        res.send({ })
    }
    res.send(-1) */
});
//localhost:8080/Saysomethingniceaboutme/hello?handsome=very&tall=indeed&cool=always
http: app.get("/saySomethingNiceAboutMe/:greeting", (req, res) => {
  console.log(req.params.greeting);
  console.log(req.query);
  if (req.query.handsome !== "very") {
    return res.send({ data: "aint no thang" }); // husk return eller else. så der ikke bliver sendt headers to gange.
  }
  {
    res.send({ data: "thanks cool cat" });
  }
  // if the client defines handsome as very then return "thanks cool cat"
  // otherwise say "aint no thang"
});

app.post("/postman", (req, res) => {
  console.log(req.body);
  res.send(req.body);
}); // brug req til at sende til body, aldrig download body parser

app.get("/fillUpWallet/:amount", (req, res) => {
  const fillUpWallet = Number(req.params.amount);

  balance += fillUpWallet;
  res.send({
    data: `Your new balance is ${balance}`,
  });
});

// http: 80
// https: 443
// http dev: 8080
//https dev: 9090
app.listen(8080);

// undefine, null false, ""
const falsyValues = NaN;

if (falsyValues) {
  console.log("not falsy");
} else {
  console.log("definitely falsy");
}
