console.log("hello world");
const myName = "Anders";    //let i javascript for at kunne ændre variablen.  const hvis den ikke skal ændres senere.


const me =  {  // object.freeze. 

};
me.name = myName;
console.log(me);

//const is constant not in the balue but in the assignment
// meaning that it cannot be reassigned and thus HAS to be assigned

const hobbies = ["coding","eating"];
hobbies.push("sleeping");
// hobbies = [];
// hobbies = "";

me.hobbies = hobbies;

//console.log(me)

// Types in jS: number, string, boolean, objects (key-value pairs (variables)), null, undefined, symbol, bigint(123412341)

// objects : object, arrays, date

//type coercion  - ændre typer så de kan sammenlignes.   det er filosofien bag jaascript at coercion er muligt. det er ikke muligt i Java e.g.
// we ALWAYs use strict equality checks:
// === and !==


// Strings:

const StringOne  = "this is one ''''''' way of defining strings"
const StringTwo= "this is one " +way+ " way of defining strings";
const StringTree = "this is one ${} way of defining strings"

`multi line String
and here`   

  // key: vlaue pair   i json skal keys have quotation marks, det skal det ikke i javascript.
const kea = {
    "address": "Guldbergsgade",
    "studentsInBuilding": 204
    }