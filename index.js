// Your code here

let dodger = document.getElementById("dodger")

dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  } else if (e.key === "ArrowRight") {
    moveDodgerRight()
  } 

})


function moveDodgerLeft() {
  let leftNums = parseInt(dodger.style.left);
  dodger.style.left = `${leftNums - 1}px`;
}

function moveDodgerRight() {
  let leftNums = parseInt(dodger.style.left);
  dodger.style.left = `${leftNums + 1}px`;
}