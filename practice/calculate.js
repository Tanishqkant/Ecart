document.getElementById("add").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML = `please enetr valid values`;
    return;
  }

  const sum = num1 + num2;
  document.getElementById("result").innerHTML = `${sum}`;
  console.log(sum);
});

document.getElementById("sub").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const sum = num1 - num2;
  document.getElementById("result").innerHTML = `${sum}`;
});

document.getElementById("mul").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const sum = num1 * num2;
  document.getElementById("result").innerHTML = `${sum}`;
});

document.getElementById("divide").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const sum = num1 / num2;
  document.getElementById("result").innerHTML = `${sum}`;
});

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerHTML = "Cleared !";
});
