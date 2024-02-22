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

// har droppet at få HTML til at fungere...

app.put("/drinks/:id", (req, res) => {
  const drinkId = Number(req.params.id);  // tager id fra path variable
  const updatedDrink = req.body;  // tager drink informationer, angiveligt fra en form på html side.
  const index = drinks.findIndex((drink) => drink.id === drinkId); // finder en drink's index ved at bruge dens id.
  if (index !== -1) {
    drinks[index] = updatedDrink; // sætter elementet på det index til at være updatedDrink fra formen.
    res.send({ data: "Drink opdateret", data: updatedDrink });  // skriver at drinket er opdateret 
  } else {
    res.status(404).json({ data: "Drink blev ikke fundet" }); 
  }
});

app.patch("/drinks/:id", (req, res) => {
    const drinkId = parseInt(req.params.id);
    const updatedFields = req.body; // opdateret fields fra en form på en htmlside.
    const drink = drinks.find((drink) => drink.id === drinkId);  // finder en drink i arrayet hvor drinken har idet der er i path variabel
    if (!drink) { // hvis den ikke er der så returner en error
      return res.status(404).send({ data: "Drink not found" });
    }
    Object.assign(drink, updatedFields); // tager det drinks object der blev fundet i arrayet og opdatere dets felter med form data fra html siden.
    res.send({ data: "Drink opdateret", data: drink });
  });

app.delete('/drinks/:id', (req, res) => {  
    const drinkId = Number(req.params.id);  
    drinks = drinks.filter(drink => drink.id !== drinkId); //tager og sletter den drink der match det id som blev givet med som path variabel.
    res.send({ message: 'Drink blev slettet' });
});

app.listen(8080, (error) => {
  if (error) {
    console.log("Error starting the server");
    return;
  }
  console.log("server is running on part", 8080);
}); // lyt til port 8080
