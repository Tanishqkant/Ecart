const userEmail = []; // if its filled it is assumed that it is not true and ("") if it is empty it is assumed that it is a false value
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

//Falsy value
/* false,
0,
-0,
BigInt 0n,
"" // empty string,
null,
undefined,
NaN
*/

//Thruthy values
/*
true,
"0",
'false',
" "// string with space is also truthy value,
[],
{},
function(){}

*/

// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

const emptyObj = {
//   name: "tanishq",
};
if (Object.keys(emptyObj).length === 0) {
  console.log("yes");
} else {
  console.log("no");
}
