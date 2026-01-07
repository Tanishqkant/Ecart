// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a, b, c);

let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  //   console.log("Inner:", a);

  //   var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

// function one() {
//   const userName = "Tanishq";

//   function two() {
//     const webSite = "Youtube";
//     console.log(userName);
//   }

//   //   console.log(webSite);
//   two();
//   console.log("One:Inner");
// }

// one();

if (true) {
  const userName = "Tanishq";
  if (userName === "Tanishq") {
    const webSite = " Youtube";
    // console.log(userName + webSite);
  }
  //   console.log(webSite);
}

// console.log(userName);

//++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++
console.log(addone(5));
function addone(num) {
  //   console.log(num);

  return num + 1;
}

console.log(addTwo(5));

const addTwo = function (num) {
  return num + 2;
};
