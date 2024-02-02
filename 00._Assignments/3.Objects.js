// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObject = { message: "Hello, earthling! I bring peace." };


const retrivedObj = myObject.message;
console.log(retrivedObj)
// Log the message 

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
const nameAgeObj = {
    name : "Lars",
    myAge : 30
}

// --------------------------------------
// Exercise 3 - Add a key-value pair 

const addKeyValue = nameAgeObj.legs = 2

console.log(nameAgeObj)

const stackOverflow = {};

// make a rule called isAllowed and let the value be true

const newRule = stackOverflow.isAllowed = true;
console.log(stackOverflow)
 
// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = { description: "The best song in the world." };

const CouldntRememberTheBestSongInTheWorld = {
    ...thisSong,
    about:"just a Tribute"
};
delete CouldntRememberTheBestSongInTheWorld.description

console.log(CouldntRememberTheBestSongInTheWorld)
// remove the property "description" and add a property called "about" that should say "Just a tribute." 


// --------------------------------------