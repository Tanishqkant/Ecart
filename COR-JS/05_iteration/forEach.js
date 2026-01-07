const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (item) {
//   //   console.log(item);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    language: "javaScript",
    languageFilename: "Js",
  },
  {
    language: "Python",
    languageFilename: "py",
  },
  {
    language: "Java",
    languageFilename: "Java",
  },
];

myCoding.forEach((item) => {
  console.log(item.language);
});
