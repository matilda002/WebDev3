let count = 0;
const button = document.getElementById("button");
let countDisplay = document.getElementById("count");
button.addEventListener("click", function() {
    count++;
    countDisplay.innerHTML = count;
});