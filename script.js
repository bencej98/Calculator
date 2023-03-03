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

// Appends eventlistener to operators and after operator is clicked stores second value

// I should somehow stop storing the first value when this happens
operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {    
        getOperatorValue(e);
        clearDisplay(e);    
   });
  });

function getOperatorValue (e) {
    let operatorValue = e.target.value;
    console.log("Operator value: " + operatorValue); 

    operandButtons.forEach(button => {
        button.addEventListener("click", getSecondValue);
    });
  }

// I should store the operator and numbers values first

// Declared variables needed for displayValue function
const operandButtons = document.querySelectorAll(".operand");
const displayDiv = document.querySelector(".display");

// These are the values that should be stored and passed to operate function as arguments
let firstValue = ""; 
let secondValue = "";
let operator = "";
let sumOfValues;
console.log(typeof(secondValue));

// Gets the currently clicked operands value and stores and displays it
function displayValue (e) {
    displayDiv.textContent += e.target.value;

}

function getFirstValue (e) {
    firstValue += Number(e.target.value);
    console.log("First value: " + firstValue);
}

// Right now it does stop storing the first value if the second is present
// The problem I should solve is that is stores the first value of the second number as it is not present yet when the function is run
operandButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        displayValue(e);
        if (secondValue === "") {
            getFirstValue(e);
        }
    });
});


// Clears the display if "AC" button is clicked
const clearButton = document.querySelector(".clear");

// Didn't use arrow function because I may reuse it later
function clearDisplay () {
    displayDiv.textContent = "";
}
clearButton.addEventListener("click", clearDisplay);


//Storing the current numbers

let currentNumber1 = displayDiv.textContent;
// After storing them I should pass them to operate function (maybe as an array?)


// Gets the second value
function getSecondValue (e) {
    secondValue += Number(e.target.value);
    console.log("Second value: " + secondValue)
}