function newData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucess = true;
      if (sucess) {
        resolve({ name: "Tanishq", age: 20 });
      } else {
        reject("There is some error fectching the data");
      }
    }, 3000);
  });
}

async function fetchdata() {
  try {
    console.log("fetching data..");

    let userData = await newData();
    console.log(`user datau`, userData);
    console.log("Done!");
  } catch (error) {
    console.log("Sorry", error);
  }
}

fetchdata();
