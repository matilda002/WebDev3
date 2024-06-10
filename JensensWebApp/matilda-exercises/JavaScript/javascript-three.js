function factorialCalculation(n) {
    if (n === 0) {
        return {result: 1, sequence: "1"};
    } else {
        const previous = factorialCalculation(n - 1);
        const result = n * previous.result;
        const sequence = previous.sequence + " * " + n;
        return {result: result, sequence: sequence};
    }
}

function factorialResult() {
    const n = parseInt(document.getElementById("numberInput").value);
    const factorial = factorialCalculation(n);
    document.getElementById("input").textContent = n;
    document.getElementById("result").textContent = factorial.result;
    document.getElementById("sequence").textContent = factorial.sequence;
}