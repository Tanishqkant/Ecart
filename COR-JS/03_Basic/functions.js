// const fun = function (funs) {
//   return console.log(`i love playing ${funs} with my friends`);
// };

// fun("BGMI");

// function addTwoNumber(Num1, Num2) {
//   if (typeof Num1 === "number" && typeof Num2 === "number") {
//     return console.log(Num1 + Num2);
//   } else {
//     console.log("Inavalid argument");
//   }
// }

// const result = addTwoNumber(78, 98);
// console.log(result);

function add(num1, num2) {
  //   let result = num1 + num2;
  // return result;

  return num1 + num2;
}
const result = add(5, 5);
// console.log("Result:", result);

function loginUserMessage(userName) {
  if (userName === undefined) {
    console.log("please enter a username");
    return;
  } else {
    return `${userName} just logged In`;
  }
}

const name = loginUserMessage("Tanishq"); //when no argument is passed it returns undefined
// console.log(name);

function calculateCartPrice(val1, val2, ...num1) {
  // val1 will have 67, val2 will have 9938 and rest of the values will go to ...num1
  //... is also called rest operator / spread operator depends upon the use case
  return num1;
}

// console.log(calculateCartPrice(67, 9938, 899));
// console.log(typeof calculateCartPrice());

const user = {
  name: "Tanihsq",
  age: 20,
};

function handleobj(anyuser) {
  console.log(
    `HI my name is ${anyuser.name} and i am ${anyuser.age} years old`
  );
}

// handleobj(user);

const arr = [39, 89, 67, 56];

function secindNUm(getEle) {
  return getEle[3];
}

// console.log(secindNUm(arr));
