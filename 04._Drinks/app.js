const express = require("express"); // import library til en variabel.
const app = express(); // instanciere express
app.use(express.json());

const directory = __dirname;

const drinks = [
  { id: 1, name: "Mojito" },
  { id: 2, name: "isbjørn" },
  { id: 3, name: "Old Fashion" },
];

app.get("/drinks", (req, res) => {
  res.send({ data: drinks });
});
// filter vs find.  find stopper når søgekriteret er opfyldt. derfor er find mest effektivt når der kun skal findes en specifik værdi
app.get("/drinks/:id", (req, res) => {
  const drinkId = Number(req.params.id);
  const foundDrink = drinks.find((drink) => drink.id === drinkId);
  if (!foundDrink) {
    res.send({ data: "drink not found" });
  } else {
    res.send({ data: foundDrink });
  }
});

app.get("/newDrinks", (req, res) => {
  res.sendFile(directory + "/public/newDrink/newDrink.html");
});

app.post("/drinks", (req, res) => {
  const drinkName = String(req.params.name);
  const newDrink = { name: drinkName };
  // kan ikke få navn til ikke at være undefined. det bliver ikke sent ordentligt fra client side...

  console.log(newDrink);
  console.log(drinkName);
  return res.status(200).json({ data: "Drink oprettet", name: drinkName });
});

app.put("/drinks/:id", (req, res) => {
  const drinkId = Number(req.params.id);
  const updatedDrink = req.body;
  const index = drinks.findIndex((drink) => drink.id === drinkId);
  if (index !== -1) {
    drinks[index] = updatedDrink;
    res.send({ data: "Drink opdateret", data: updatedDrink });
  } else {
    res.status(404).json({ data: "Drink blev ikke fundet" });
  }
});

app.patch("/drinks/:id", (req, res) => {
    const drinkId = parseInt(req.params.id);
    const updatedFields = req.body;
    const drink = drinks.find((drink) => drink.id === drinkId);
    if (!drink) {
      return res.status(404).send({ data: "Drink not found" });
    }
    Object.assign(drink, updatedFields);
    res.send({ data: "Drink opdateret", data: drink });
  });

app.delete('/drinks/:id', (req, res) => {
    const drinkId = Number(req.params.id);
    drinks = drinks.filter(drink => drink.id !== drinkId);
    res.send({ message: 'Drink blev slettet' });
});

app.listen(8080, (error) => {
  if (error) {
    console.log("Error starting the server");
    return;
  }
  console.log("server is running on part", 8080);
}); // lyt til port 8080
