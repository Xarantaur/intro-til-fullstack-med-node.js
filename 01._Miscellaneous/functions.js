// getRandomInt(); // det ville virke at invoke funktionen nu i javascript. 

// hoisting : jit compiler. javascript compiler læser alle declarationer igennem før den køre koden. så man kan kalde en metode før den er deklararet 

function getRandomInt(min, max){
   return Math.floor(Math.random() * (max + 1 - min) + min);
}


// anonym function :  den har ikke et navn. 
const getRandomIntAnonymousFunction = function (min, max){
    return Math.floor(Math.random() * (max + 1 - min) + min);
};


// ArrowFunctions : det er også en Anonym function. den binder "this" til det's eget scope. 
const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
};

// task write the above arraow function in a single line :
// one liner : uden tuborg klammer, man kan ikke køre statements i en oneliner. e.g. console.log for debugging.
const getRandomIntArrowFunctionOneLiner = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);


                                // string, Callback function    // hvad er en callback function : programmet kan udføre andet kode i mens en callback function kaldes. Async.
                                                                // det er en funktion der bliver givet med som argument i en anden funktion. 
function genericActionPerformer(name, genericAction){
    return genericAction(name);
}

// variable   =   variable reference.
const running = (name) => `${name} is running`;
// const runningResult = genericActionPerformer("alex", running);

// console.log(runningResult);

const eating = (name) =>`${name} is eating`

//const whoIsEating = genericActionPerformer("Louis", eating)

 //                                 i begge tilfælde passer vi funktions referancen direkte istedet for at pakke det ind i en variabel.
console.log(genericActionPerformer("Louis", (name) => `${name} is eating` ))

