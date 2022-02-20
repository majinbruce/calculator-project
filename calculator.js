const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

function getNumbers() {
  const num1 = parseInt(input1.value);
  const num2 = parseInt(input2.value);
  if (!num1 || !num2) {
    alert("please enter valid input");
    return;
  }
  return [num1, num2];
}

function addition() {
  const numbers = getNumbers();
  const result = numbers[0] + numbers[1];
  alert(`${numbers[0]} + ${numbers[1]} = ${result}`);
}

function subtraction() {
  const numbers = getNumbers();
  const result = numbers[0] - numbers[1];
  alert(`${numbers[0]} - ${numbers[1]} = ${result}`);
}

function division() {
  const numbers = getNumbers();
  const result = numbers[0] / numbers[1];
  alert(`${numbers[0]} / ${numbers[1]} = ${result}`);
}

function multiplication() {
  const numbers = getNumbers();
  const result = numbers[0] * numbers[1];
  alert(`${numbers[0]} * ${numbers[1]} = ${result}`);
}

function percentage() {
  const numbers = getNumbers();
  const result = numbers[0] % numbers[1];
  alert(`${numbers[0]} % ${numbers[1]} = ${result}`);
}

add.addEventListener("click", addition);
subtract.addEventListener("click", subtraction);
divide.addEventListener("click", division);
multiply.addEventListener("click", multiplication);
percent.addEventListener("click", percentage);
