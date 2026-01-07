// singleton

//Object literals
const hobbies = Symbol("GYM");
const user = {
  name: "Tanishq",
  [hobbies]: "GYM",
  age: 20,
  loctaion: "Faridabad",
  email: "tanishqkant@gmail.com",
  isLoggedin: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(user["name"]);
// console.log(typeof user[hobbies]);

// const newobj = (user.age = 30);
// Object.freeze(user);
// (user.age = 40), console.log(newobj);
// console.log(user);

user.greeting = function () {
  console.log(`hello ${user.name}`);
}; //we can also use this[keyword] to access the name in baove function

console.log(user.greeting());
//with constructor method

// const men = Object.create;
