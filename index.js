setTimeout(function() {
    document.getElementById("welcome-message").style.display = "block";
    setTimeout(function() {
      document.getElementById("welcome-message").style.display = "none";
    }, 5000); // hide after 3 seconds
  }, 5000); // display after 5 seconds
const countDisplay = document.getElementById("count-display");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const resetBtn = document.getElementById("reset-btn");

let count = 0;

function increment() {
    count ++;
    countDisplay.textContent = count;
}

function decrement() {
   count = Math.max(0, count - 1);
    countDisplay.textContent = count;
}

function reset() {
    count = 0;
    countDisplay.textContent = count;
}

// eventlisteners
add.addEventListener("click", increment);
subtract.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);