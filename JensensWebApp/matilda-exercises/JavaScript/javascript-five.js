function calculate(numberOne, numberTwo, callback) {
    return callback(numberOne, numberTwo)
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Invalid, division with 0 is not possible";
    }
    return x / y;
}

console.log("70 + 5 = ", calculate(70, 5, add));
console.log("47 - 27 = ", calculate(47, 21, subtract));
console.log("370 * 35 = ", calculate(370, 35, multiply));
console.log("40 / 0.5 = ", calculate(40, 0.5, divide)); 
console.log("(1 + 5)(10 * 4) = ", calculate(1, 5, add) + calculate(10, 4, multiply));

console.log("20 / 0 = ", calculate(20, 0, divide)); // invalid, cannot divide with 0