const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let firstOperand = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      operator = "";
      firstOperand = null;
      display.value = "";
    }
    else if (value === "=") {
      if (firstOperand !== null && operator !== "" && currentInput !== "") {
        const secondOperand = parseFloat(currentInput);
        let result;
        switch (operator) {
          case "+": result = firstOperand + secondOperand; break;
          case "-": result = firstOperand - secondOperand; break;
          case "*": result = firstOperand * secondOperand; break;
          case "/": result = firstOperand / secondOperand; break;
        }
        display.value = `${firstOperand} ${operator} ${secondOperand} = ${result}`;
        firstOperand = result;
        currentInput = "";
        operator = "";
      }
    } 
    else if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput === "") return;
      firstOperand = parseFloat(currentInput);
      operator = value;
      display.value = `${firstOperand} ${operator}`;
      currentInput = "";
    } 
    else {
      currentInput += value;
      display.value = operator
        ? `${firstOperand} ${operator} ${currentInput}`
        : currentInput;
    }
  });
});
