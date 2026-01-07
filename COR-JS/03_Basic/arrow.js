// const user = {
//   userName: "Tanishq",
//   price: 999,

//   welcome: function () {
//     console.log(`${this.userName}, welcome to website`);
//     console.log(this);
//   },
// };

// user.welcome();
// user.userName = "Nikhil";
// user.welcome();

// console.log(this);

// function mai() {
//   let userName = "Tanihsq";
//   console.log(this.userName);
// }

// mai();

// const tu = ()=>{
//     let userName ="Tanishq";
//     console.log(this);

// }

const addTwo = (num1, num2) => {
  return num1 + num2;
};
const addTwo2 = (num1, num2) => num1 + num2; //Implicit return (In this we don't need to use curly braces ) in this we assume that we don't need return statement

const numbers = () => ({ usnerName: "Tanishq" }); // we use this method bucz we can not return objcet without parenthises

// console.log(addTwo2(4, 3));

console.log(numbers());
