//reduce method
const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc:${acc} and currVal:${currval}`);

//   return acc + currval;
// }, 0);

// const myTotal = myNums.reduce((acc, curr) => {
//   console.log(`acc:${acc} and currVal:${curr}`);

//   return acc + curr;
// }, 0);
// console.log(myTotal);

const shoppingcart = [
  {
    itemName: "Js cource",
    price: 2999,
  },
  {
    itemName: "PY cource",
    price: 999,
  },
  {
    itemName: "Java",
    price: 1999,
  },
];

const myCart = shoppingcart.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(myCart);
