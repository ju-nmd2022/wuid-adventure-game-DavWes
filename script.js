let isRingPicked = false;
let isSamPicked = false;
let isStingPicked = false;

// INDEX
window.addEventListener("load", function () {});
if (window.localStorage.isRingPicked === true) {
  document.getElementById("thering").style.display = "block";
  const indexroom = document.getElementById("indexroom");
  backroom.src = "images/gollum.png";
} else {
  alert("You forgot to take the ring");
}
