console.log("hi");

const arr = [1, 2, 3, 4];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "hello world";
for (const letters of greetings) {
  //   console.log(letters);
}
//Maps(Are for unique values and remain in same order as entered)

const map = new Map();
map.set("IN", "India");
map.set("USA", "Unided states of America");
map.set("FR", "France");
// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

const myObj = {
  Game1: "NFS",
  Game2: "GTAV",
};

// for (const [key, value] of myObj) {
//   console.log(key, ":-", value);
// }
