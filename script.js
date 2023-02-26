// Here I should create the 4 basic operations present on a calculator

// Returns the sum of 2 numbers
function add(input1, input2) {
    return input1 + input2;
}

// Returns the difference of 2 numbers
function subtract (input1, input2) {
    return input1 - input2;
}

// Returns the product of 2 numbers
function multiply (input1, input2) {
    return input1 * input2;
}
// Returns the quotient of 2 numbers
function divide (input1, input2) {
    return input1 / input2;
}

function operate (operator, input1, input2) {
    console.log("foo")
    if (operator === "+") {
        return add(input1, input2);
    } else if (operator === "-") {
        return subtract(input1, input2);
    } else if (operator === "*") {
        return multiply(input1, input2);
    } else if (operator === "/") {
        return divide(input1, input2);
    }

}

// Get operator buttons value if clicked
const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(button => {
    button.addEventListener("click", getOperatorValue);
  });

function getOperatorValue (e) {
    console.log(calculationArguments = (e.target.value)); 
  }

// I should store the operator and numbers values first

// I should also get the operand values clicked and display them

const operandButtons = document.querySelectorAll(".operand");
const displayDiv =document.querySelector(".display");

function displayValue (e) {
    displayDiv.textContent = e.target.value;
}

operandButtons.forEach(button => {
    button.addEventListener("click", displayValue);
});

// After storing them I should pass them to operate function (maybe as an array?)