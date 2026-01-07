//Question 1

function makeTea(typeOftea) {
  return `Making  ${typeOftea}`;
}
let Order = makeTea("Macha tea");
// console.log(Order);

//Question 2

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirm for ${teaType}`;
  }
  return confirmOrder();
}
let orderComfirmation = orderTea("Masala Chai");
// console.log(orderComfirmation);

//Question 3
const calculateTotal = (price, quantity) => {
  return `Total: ${price * quantity}`;
};
let totalCost = calculateTotal(676, 902);
// console.log(totalCost);

//Question 4

function makeTea(typeOfTea) {
  return `make tea: ${typeOfTea}`;
}
function processTeaOrder(makeTea) {
  return makeTea("eral grey");
}

let newOrder = processTeaOrder(makeTea);
// console.log(newOrder);   // This behaviour is called higherorder function or first class function

//Anything that function as a parameter is called higher oder function

function createTeaMaker(name) {
  return function madeTea(typeTea) {
    return `Making ${typeTea} ${name}`;
  };
}
let teaMaker = createTeaMaker(); //tea maker is holding a function
// console.log(teaMaker("geeen tea"));

//Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

function stringNumber(input) {
  let number = Number(input);
  if (isNaN(number)) {
    console.log("not a number");
  } else {
    console.log(number);
  }
}

// stringNumber("5");

//Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
function flip(input) {
  let boolean = Boolean(input);
  let flip = !boolean;
  return flip;
}
// console.log(flip(true));
// console.log(flip(false));

//Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

function whatAmI(input) {
  let AmI = input;
  if (AmI === String(input)) {
    return `I am a string ${AmI}`;
  } else if (AmI === Number(input)) {
    return `I am a number ${AmI}`;
  } else {
    return `Enter a valid value`;
  }
}
// console.log(whatAmI("Tanishq"));
// console.log(whatAmI(2));

//Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

function isItTruthy(input) {
  let value = input;
  if (value == true) {
    return `It is truthy! ${value}`;
  } else if (value == false) {
    return `It is falsey! ${value}`;
  } else {
    console.log("Enter a valid value");
  }
}
console.log(isItTruthy(" "));
