const marvel_heros = ["Thor", "Ironman", "Spidermans"];
const Dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(Dc_heros);
// console.log(marvel_heros[3][1]);

const new_heros = marvel_heros.concat(Dc_heros);
console.log(new_heros);
// console.log(marvel_heros  + Dc_heros);

// spread operator
const all_heros = [...marvel_heros, ...Dc_heros];
// console.log(all_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, (7)[(4, 5)]]];

const real_array = another_array.flat(Infinity);
// console.log(real_array);

// console.log(Array.isArray("tanishq"));
// console.log(Array.from("tanishq"));
// console.log(Array.from({ name: "Tanishq" })); //Important

let score = 100;
let score2 = 200;
let score3 = 3000;

console.log(Array.of(score, score2, score3));
