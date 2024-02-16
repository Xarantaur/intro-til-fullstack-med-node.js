const express = require("express"); // import library til en variabel.
const app = express(); // instanciere express

const drinks = [
    {id: 1, name: "Mojito"},
    {id: 2, name: "isbjørn"},
    {id: 3, name: "Old Fashion"},
];

app.get("/drinks", (req, res) => {
    res.send({data: drinks})
})
 // filter vs find.  find stopper når søgekriteret er opfyldt. derfor er find mest effektivt når der kun skal findes en specifik værdi
app.get("/drinks/:id", (req, res) => {
    const drinkId = Number(req.params.id);
    const foundDrink = drinks.find((drink) => drink.id === drinkId)
    if (!foundDrink) {
        res.send({data: "drink not found"})
    }else {
        res.send({data: foundDrink })
    }
    
})


app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server")
        return;
    }
    console.log("server is running on part", 8080)
})  // lyt til port 8080