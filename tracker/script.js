// Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const outputText = document.getElementById("outputText");
const ownerNameInput = document.getElementById("ownerName");
const carModelInput = document.getElementById("carModel");

// Start Camera Stream
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => {
    console.error("Error accessing camera: ", err);
  });

// Capture Image from Video
function captureImage() {
  const context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  let imageData = canvas.toDataURL("image/png");
  processImage(imageData);
}

// Process Image with OCR
function processImage(imageData) {
  Tesseract.recognize(imageData, "eng", { logger: (m) => console.log(m) })
    .then(({ data: { text } }) => {
      let plateNumber = text.replace(/\s/g, "").toUpperCase();
      outputText.innerText = plateNumber;

      // Save Image & Plate to Firebase
      uploadImage(imageData, plateNumber);
    })
    .catch((err) => console.error("OCR Error: ", err));
}

// Upload Image to Firebase Storage
function uploadImage(imageData, plateNumber) {
  let storageRef = storage.ref("plates/" + plateNumber + ".png");

  fetch(imageData)
    .then((res) => res.blob())
    .then((blob) => {
      storageRef.put(blob).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
          console.log("Image uploaded: ", url);
          saveToFirestore(plateNumber, url);
        });
      });
    });
}

// Save Data to Firestore
function saveToFirestore(plateNumber, imageUrl) {
  let ownerName = ownerNameInput.value;
  let carModel = carModelInput.value;

  db.collection("licensePlates")
    .add({
      plateNumber: plateNumber,
      ownerName: ownerName,
      carModel: carModel,
      imageUrl: imageUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      alert("Data Saved!");
      displayStoredPlates();
    })
    .catch((error) => console.error("Error saving data: ", error));
}

// Display Stored Plates
function displayStoredPlates() {
  db.collection("licensePlates")
    .orderBy("timestamp", "desc")
    .get()
    .then((snapshot) => {
      let plateList = document.getElementById("plateList");
      plateList.innerHTML = "";

      snapshot.forEach((doc) => {
        let data = doc.data();
        let li = document.createElement("li");
        li.innerHTML = `
                    <strong>${data.plateNumber}</strong> - ${data.ownerName} (${data.carModel})
                    <br><img src="${data.imageUrl}" width="100">
                `;
        plateList.appendChild(li);
      });
    });
}

// Load Plates on Page Load
document.addEventListener("DOMContentLoaded", displayStoredPlates);
