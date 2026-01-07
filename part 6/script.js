// example 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let para = document.getElementById("myParagraph");
    para.innerHTML = "ho gaya change bhai ";
  });

//   example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

//   example 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffe = document.getElementById("coffeeOrder");
  coffe.firstElementChild.innerHTML = " Espresso";
  coffe.style.color = "red";
});

// example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

// example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let list = document.getElementById("taskList");
    list.lastElementChild.remove();
  });

// example 6
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("pop up");
  });

// example 7
document.getElementById("teaList").addEventListener("click", function (event) {
  document.getElementById("teaList");
  if (event.target && event.target.matches(".teaItem")) {
    alert("You select:" + event.target.textContent);
  }
});

// example 8
document
  .getElementById("feedbackFrom")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `FeedBack is : ${feedback}`;
    document.getElementById("feedbackDisplay").style.color = "red";
  });
// how to grab the lable ?
// feedback text bigger and change bg color

// example 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully Loaded";
});

// example 10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let text = document.getElementById("descriptionText");
    // text.style.color = "red";
    text.classList.toggle("highlight");
  });
