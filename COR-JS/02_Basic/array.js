// let a = [1, 3, 4, 4, 5];
// console.log(a);

// Array methods

const myArr = new Array(1, 3, 4, 56, 7, 78, 8);
console.log(myArr[5]);

// myArr.push(69); // add an element at the end of an array

// myArr.pop();// remove the last element from the array
// myArr.unshift(787); // add an element at the start of the array

// myArr.shift();// it removes the first element from the array
// console.log(myArr);

// console.log(myArr.includes(78));
// console.log(myArr.indexOf(78));

const newArr = myArr.join();

// console.log(typeof myArr);
// console.log(typeof newArr);

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3); //The last value will not be included in the array the outpul will be [3,4]
// console.log(myn1);

// console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); //It manipulate the original array.
console.log("C ", myArr);

// console.log(myn2);
