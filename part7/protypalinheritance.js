// function person(name) {
//   this.name = name;
// }

// person.prototype.greet = function () {
//   console.log(`hello , my name is ${this.name}`);
// };

// let man = new person("Tanishq");
// man.greet();

// function simulateAsyncTask() {
//   console.log("Task started");
//   setTimeout(function Task() {
//     console.log("Task finished");
//   }, 2000);
// }
// simulateAsyncTask();

// function multipleby5(num) {
//   return num * 5;
// }
// multipleby5.power = 2;
// console.log(multipleby5(5));
// console.log(multipleby5.power);
// console.log(multipleby5.prototype);

// function createuser(username, score) {
//   this.username = username;
//   this.score = score;
// }

// createuser.prototype.increment = function () {
//   this.score++;
//   console.log(this.score);
// };
// createuser.prototype.printMe = function () {
//   console.log(`score is ${this.score} for ${this.username}`);
// };
// const chai = new createuser("chai", 25);
// const tea = new createuser("tea", 250);

// chai.printMe();
// tea.increment();

function userName(Name, age) {
  this.Name = Name;
  this.age = age;
}

userName.prototype.greet = function () {
  console.log(`Hello ${this.Name}`);
};

userName.prototype.old = function () {
  console.log(`According to data your age is:${this.age}`);
};

const naam = new userName("Tanishq", 20);
const b = new userName("Rohan", 19);

naam.old();
b.greet();
