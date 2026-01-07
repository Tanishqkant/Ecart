// let sum = 0;
// let i = 0;

// while (i <= 5) {
//   sum = sum + i;
//   //   sum += 1;
//   i++;
// }
// console.log(sum);

let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}

// console.log(sum);

//question 2

let count = [];
let j = 5;
while (j >= 1) {
  count.push(j);
  j--;
}

// console.log(count);

//question 3

let teaCollection = [];
let tea;
// do {
//   tea = prompt(`Eneter your favourite tea (tyoe "stop" to finish)`);
//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");

//question 4

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);
// console.log(total);

//question 5

let orgArray = [2, 4, 6];
let doublArray = [];
for (let index = 0; index < orgArray.length; index++) {
  realarr = orgArray[index] * 2;
  doublArray.push(realarr);
}
// console.log(doublArray);

//question 6
let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let index = 0; index < cities.length; index++) {
  // cities[index];
  cityList.push(cities[index]);
}

// console.log(cityList);

//question 7

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let index = 0; index < teas.length; index++) {
  if (teas[index] === "chai") {
    break;
  }
  selectedTeas.push(teas[index]);
}
// console.log(selectedTeas);

//question 8
let Cities = ["London", "New York", "Paris", "Berlin"];
let citiesVisited = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") {
    continue;
  }
  citiesVisited.push(cities[i]);
}
// console.log(citiesVisited);

//questions 9

let num = [1, 2, 3, 4, 5];
let smallnum = [];
for (let i of num) {
  if (i === 4) {
    break;
  }
  smallnum.push(i);
}

// console.log(smallnum);

//question 10

let arr = ["chai", "green tea", "herbal", "black tea"];

let preferredTeas = [];

for (let i of arr) {
  if (i === "herbal") {
    continue;
  }
  preferredTeas.push(i);
}
// console.log(preferredTeas);

//question 11

let cities_1 = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let citiesPopulation = {};

for (const city in cities_1) {
  // key = value;
  if (city === "Berlin") {
    break;
  }
  citiesPopulation[city] = cities_1[city];
}
// console.log(Object.keys(cities_1));
// console.log(citiesPopulation);

//Question 12

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = {};
for (const cities in worldCities) {
  if (worldCities[cities] < 3000000) {
    continue;
  }
  largeCities[cities] = worldCities[cities];
}
// console.log(largeCities);

//Question 13

let n = ["earl grey", "green tea", "chai", "oolong tea"];

let avalilableTea = [];

n.forEach(function (i) {
  if (i === "chai") {
    return;
  }
  avalilableTea.push(i);
});
// console.log(avalilableTea);

//Question 14

let myworldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];

let traveledCities = [];

myworldCities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});

// console.log(traveledCities);

//question 15

let theNum = [2, 5, 7, 9];

let doubledNumber = [];

for (let i = 0; i < theNum.length; i++) {
  if (theNum[i] === 7) {
    continue;
  }
  doubledNumber.push(theNum[i] * 2);
}
// console.log(doubledNumber);

//Question 16

let myChai = ["Chai", "Green Tea", "Black Tea", "Jasime Tea", "Herbal  Tea"];

let shortTea = [];

for (let i of myChai) {
  if (i.length > 10) {
    break;
  }
  shortTea.push(i);
}
console.log(shortTea);
