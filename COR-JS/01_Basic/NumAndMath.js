const balance = 200;
console.log(balance);

const newBlc = balance.toString();
console.log(typeof newBlc);

const otherNumber = 123.86903;
console.log(otherNumber.toPrecision(5));

// +++++++++++++++++++++ Maths +++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(6.9));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.min(7, 8, 90, 34, 4, 1, -1));
// console.log(Math.max(902, 37832, 783, 62, 90));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
// (Math.random() * (max - min + 1))
