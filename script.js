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

// Sum function should return the current operations final value and reset the first and second value
function operate (operator, input1, input2) {
    let finalValue;
    if (operator === "+") {
        finalValue = add(input1, input2);
        console.log(finalValue);
        return finalValue;
    } else if (operator === "-") {
        finalValue = subtract(input1, input2);
        console.log(finalValue);
        return finalValue;
    } else if (operator === "*") {
        finalValue = multiply(input1, input2);
        console.log(finalValue);
        return finalValue;
    } else if (operator === "/") {
        finalValue = divide(input1, input2);
        console.log(finalValue);
        return finalValue;
    }

}


// Gets equals button and if all three values needed are present calls operate function
const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click",  () => {
    if (Boolean(firstValue) & Boolean(secondValue) & Boolean(operator)) {
        operate(operator, firstValue, secondValue);
    } else {
        console.log("BAR");
    }
});

// Get operator buttons value if clicked
const operatorButtons = document.querySelectorAll(".operator");

// Appends eventlistener to operators and after operator is clicked stores second value
operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {    
        getOperatorValue(e);
        clearDisplay(e);    
   });
  });


function getOperatorValue (e) {
    operatorValue = e.target.value;
    console.log("Operator value: " + operatorValue);

    operandButtons.forEach(button => {
        button.addEventListener("click", getSecondValue);
    });

    return operatorValue;
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

// Gets the currently clicked operands value and stores and displays it
function displayValue (e) {
    displayDiv.textContent += e.target.value;

}

function getFirstValue (e) {
    firstValue += Number(e.target.value);
    console.log("First value: " + firstValue);
    return firstValue;
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
    return secondValue;
}

// NOW I SHOULD RETURN ALL THE 3 DATA NEEDED FOR THE EQUALS FUNCTION AND SOMEHOW PASS ALL 3 TO OPERATE TO MAKE IT WORK