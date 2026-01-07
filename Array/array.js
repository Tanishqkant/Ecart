// question 1

let teaFlavors = ["green tea", "black tea", "oolong tea"];

let firstTea = teaFlavors[0];
// console.log(firstTea);

//question 2
let cities = ["London", "Tokyo", "Paris", "New York"];

let favoritecity = cities[2];
// console.log(favoritecity);

//question 3

let teaType = ["herbal tea", "white tea", "masala chai"];

teaType[1] = "jasmine tea";
let newtea = teaType;

// console.log(newtea);

//question 4

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");

// console.log(citiesVisited);

//question 5
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];

let lastOrder = teaOrders.pop();

// console.log(lastOrder);

//question 6

let popularTeas = ["green tea", "oolong tea", "chai"];

let softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(softCopyTeas);
// console.log(popularTeas);

//question 7

let topCities = ["Berliin", "Singapore", "New York"];

let hardCopyCities = [...topCities];

topCities.pop();
// console.log(topCities);
// console.log(hardCopyCities);

//question 8

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];

// let worldCities = europeanCities + asianCities;

// let worldCities = [europeanCities, asianCities];

let worldCities = europeanCities.concat(asianCities);
// console.log(worldCities);

//question 9

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];

let menuLenght = teaMenu.length;

//question 10

let cityBucketList = ["Kyoto", "london", "Cape Town", "Vancouver"];

let isLondonList = cityBucketList.includes("London" || "london");
console.log(isLondonList);
