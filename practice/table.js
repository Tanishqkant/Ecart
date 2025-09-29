document.getElementById("Generate").addEventListener("click", function () {
  const num = document.getElementById("number").value;
  for (i = 0; i <= 10; i++) {
    document.getElementById("result").innerHTML += `${num} x ${i} = ${
      num * i
    }<br>`;
  }
});

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("number").value = "";
  document.getElementById("result").innerHTML = "";
});
