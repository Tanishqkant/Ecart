function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucess = true;
      if (sucess) {
        resolve({ name: "tanishq", url: "https://chaicode.com" });
      } else {
        reject("Raja Gujjar ke kasam no mila bhai kuch");
      }
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    let userData = await fetchUserData();
    console.log("data fetched sucessful");

    console.log("user data:", userData);
  } catch (error) {
    console.log("Error fetching the data", error);

    console.log("Data not found");
  }
}

getUserData();
