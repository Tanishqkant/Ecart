//Immediatly Invoked function Expression(IIFE)
(function one() {   //Named IIFE
  //   return `DB conneted`
  console.log("DB Conneted");
})(); //<= iffe syntax
// console.log(one());

// we use iife to immediately call a function and to eliminate global scope pollution

((name) => {
  console.log(`DB CONNECTED ${name}`);
})("Tanishq");
