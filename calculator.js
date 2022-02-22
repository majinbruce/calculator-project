//function that updates the Enternumber box
function display(operator) {
  document.getElementById("num1").value += operator;
}

//function that calculates the expression and returns result
function calculate() {
  // validateInput();
  let enterNumbers = document.getElementById("num1").value;
  let result = eval(enterNumbers);
  document.getElementById("result").value = result;
  document.getElementById("num1").value = enterNumbers;
}

//Event listners attached to event to prevent the default behavior i.e reloading the page
add.addEventListener("click", (event) => {
  event.preventDefault();
});
subtract.addEventListener("click", (event) => {
  event.preventDefault();
});
divide.addEventListener("click", (event) => {
  event.preventDefault();
});
multiply.addEventListener("click", (event) => {
  event.preventDefault();
});

equals.addEventListener("click", (event) => {
  event.preventDefault();
});

percent.addEventListener("click", (event) => {
  event.preventDefault();
});

//eventListner attached to result box which prvents user from entering values in the result box
result.addEventListener("click", (event) => {
  const result = event.target.closest("div");
  if (result) {
    alert("please do not enter values in the result box");
  }
});
