const naam = "Tanishq";
const gameName = new String("GODOFWAR");
console.log(gameName.charAt(2)); // charAt tells what is at the 2 position
console.log(naam.charAt(4));
console.log(naam.indexOf("T")); //Indexof tell the index of particular letter

const newNaam = naam.substring(0, 4);
console.log(newNaam);

const jjj = "Hi Tanishq how are you";

const splitword = jjj.split(" ");

console.log(splitword);

console.log(typeof splitword);

console.log(typeof gameName);
