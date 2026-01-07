const isUserLoggedin = true;
const debitCard = true;
let banalnce = 10000;

if (isUserLoggedin && debitCard) {
  console.log("You are logged in");

  if (banalnce >= 5000) {
    console.log("You are allowed to buy ");
  } else {
    console.log("you are not allowed");
  }
} else {
  console.log("You are not allowed");
}
//(??) Nullish Coalescing Operator: null , undefined // Made for null and undeined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;

// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 15; // In this scenario the first value will get assigned
console.log(val1);

//Terniary Operator

// condition ? true : false;

const Price = 100;
Price <= 80 ? console.log("less than 80") : console.log("More than 80");
