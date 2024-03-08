
console.log(helicopter);

function helicopterFactory(){
   const helicopter = require("/helicopter.json"); 
   return helicopter;
}

module.exports = {helicopterFactory}

function helicopterFactory(){}