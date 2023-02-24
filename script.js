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
console.log(operate("*",5, 5));