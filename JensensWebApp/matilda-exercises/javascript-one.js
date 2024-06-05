/*
Design a simple program that takes in a number (n) from the user
and outputs the sum of all numbers from 1 to n, but only including
those numbers that are either multiples of 3 or 5.

Assume the user passed the number ‘10’ in the function, this means
you will have to add the numbers 3, 5, 6, 9 and 10 together since
those are the numbers that has a zero remainder when divided with
either of those numbers(3,5) and print out the result.
*/

function calculateSum() {
    var n = parseInt(document.getElementById("numberInput").value);
    var sum = 0;
    
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    document.getElementById("result").textContent = "The sum is: " + sum;
}