// loop method
// forEach, map, filter, sort, find, reduce
// ^ disse loop methoder er dem vi vil bruge i dette fag.

console.log("hello there");
// nodemon er en wrapper for node.
// auto builder projektet når der opdateres i filerne
// undgå side effects ( kig på wikipedia for info)

const dogs = [
  { name: "lassie", famelevel: 13 },
  { name: "beethoven", famelevel: 8 },
  { name: "hachiko", famelevel: 18 },
  { name: "balto", famelevel: 5 },
];

// add a famelevel of +3 for all dogs

const addPointsFame = dogs.map((dog) => {
    dog.famelevel += 3;
    return dog;
 /* if (dog.name === "lassie") {
    dog.male = false;
  } else {
    dog.male = true;
  }*/
  // return 1 = 1 i hvert index af arrayet.
  // return dog = returnere det samme array af dogs som der blev loopet igennem
});

const genderedDogs = addPointsFame.map((dog) => ({
    isMale: dog.name === "lassie" ? false : true,
    name: dog.name,
    famelevel: dog.famelevel
}));

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((num) => num * 2);

// console.log(numbers)
// console.log(doubledNumbers)
numbers.map((number, index, originalArray) => console.log(number, index, originalArray))

// når vi arbejder med loops kigger vi kun fremad. vi laver nye spots i memory istedet for at ref til tidligere objs. ikke kig tilbag


console.log(addPointsFame);
console.log(dogs);
console.log(genderedDogs)