// objects constructor  (singleton)

// const user = new Object()
const user = {};
user.id = "1235";
user.name = "Tanishq";
user.isLoggedin = false;

// console.log(user);

const newUser = {
  email: "Someone@gmail.com",
  fullname: {
    userfullname: {
      firstName: "Tanishq",
      LastName: "Kant",
    },
  },
};

// console.log(newUser.fullname.userfullname.LastName);

const obj1 = {
  1: "a",
  2: "b",
  3: "c",
};

const obj2 = {
  4: "d",
  5: "e",
  6: "f",
};

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 }; //spread operator
// console.log(obj3);

const arr = [
  {
    id: "one",
    gmail: "namane.com",
  },
  {
    id: "one",
    gmail: "namane.com",
  },
  {
    id: "one",
    gmail: "namane.com",
  },
  {
    id: "one",
    gmail: "namane.com",
  },
  {
    id: "one",
    gmail: "namane.com",
  },
  {
    id: "one",
    gmail: "namane.com",
  },
  {
    id: "one",
    gmail: "namane.com",
  },
];

// console.log(arr[1].id);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty("isLoggedin"));

const course = {
  cousreName: "JS Hindi",
  price: "999",
  courseInstructor: "Tanishq",
};
// course.cousreName

const { courseInstructor: instructor } = course; // another way to taking out value from object (IMP)[We can also name it accordingly  using ->":" symbol  it is called object destructure]
// console.log(instructor);
