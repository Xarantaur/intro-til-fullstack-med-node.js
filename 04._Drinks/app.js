const express = require("express"); // import library til en variabel.
const app = express(); // instanciere express
app.use(express.json());

const directory = __dirname;

const drinks = [
  { id: 1, name: "Mojito" },
  { id: 2, name: "isbjørn" },
  { id: 3, name: "Old Fashion" },
];

let nextId = 4;

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
  const newDrink = req.body;
  newDrink.id = nextId++;
  drinks.push(newDrink);
  console.log(req.body);
  res.send({ data: newDrink });
  /* const drinkName = String(req.params.name);
  const newDrink = { name: drinkName };
  // kan ikke få navn til ikke at være undefined. det bliver ikke sent ordentligt fra client side...

  console.log(newDrink);
  console.log(drinkName);
  return res.status(200).json({ data: "Drink oprettet", name: drinkName }); */
});

// har droppet at få HTML til at fungere...

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

console.log({
  value: 1000,
  value: 20,
});

app.patch("/drinks/:id", (req, res) => {
  const drinkId = Number(req.params.id);
  const foundDrinkIndex = drinks.find((drink) => drink.id === drinkId);
  if (foundDrinkIndex === -1) {
    res.status(404).send({ error: "drink not found" });
  } else {
    // spread operator:
    drinks[foundDrinkIndex] = { ...drinks[foundDrinkIndex], ...req.body, id: drinkId };
    res.send({ data: drinks[foundDrinkIndex] });
  }
  /*const drinkId = parseInt(req.params.id);
    const updatedFields = req.body; // opdateret fields fra en form på en htmlside.
    const drink = drinks.find((drink) => drink.id === drinkId);  // finder en drink i arrayet hvor drinken har idet der er i path variabel
    if (!drink) { // hvis den ikke er der så returner en error
      return res.status(404).send({ data: "Drink not found" });
    }
    Object.assign(drink, updatedFields); // tager det drinks object der blev fundet i arrayet og opdatere dets felter med form data fra html siden.
    res.send({ data: "Drink opdateret", data: drink }); */
});

app.delete("/drinks/:id", (req, res) => {
  // findIndex, find, splice
  const drinkId = Number(req.params.id);
  const foundDrinkIndex = drinks.findIndex((drink) => drink.id === drinkId);
  if (!foundDrinkIndex === -1) {
    res.status(404).send({ error: "drink not found" });
  } else {
    drinks.splice(foundDrinkIndex, 1);
    res.send({ data: drinkID });
  }
  /*  drinks = drinks.filter(drink => drink.id !== drinkId); //tager og sletter den drink der match det id som blev givet med som path variabel.
    res.send({ message: 'Drink blev slettet' }); */
});

app.listen(8080, (error) => {
  if (error) {
    console.log("Error starting the server");
    return;
  }
  console.log("server is running on part", 8080);
}); // lyt til port 8080
