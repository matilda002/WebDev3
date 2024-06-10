document.addEventListener("DOMContentLoaded", function() {
    const colorClicked = document.getElementById("colorClicked");

    document.getElementById("red").addEventListener("click", function() {
        colorClicked.style.backgroundColor = "red";
        colorClicked.style.color = "red";
    });

    document.getElementById("green").addEventListener("click", function() {
        colorClicked.style.backgroundColor = "green";
        colorClicked.style.color = "green";
    });

    document.getElementById("blue").addEventListener("click", function() {
        colorClicked.style.backgroundColor = "blue";
        colorClicked.style.color = "blue";
    });
});