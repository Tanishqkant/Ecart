const myObject = {
  js: "JavaScript",
  cpp: "c++",
  RB: "Ruby",
  swift: "Swift by apple",
};
for (const key in myObject) {
  //   console.log(myObject[key]);
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "java", "cpp"];
for (const key in programming) {
  //   console.log(programming[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "Unided states of America");
map.set("FR", "France");
