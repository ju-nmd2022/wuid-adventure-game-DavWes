// let isRingPicked = false;
// let isSamPicked = false;
// let isStingPicked = false;

let ring = document.getElementById("thering");
let indexroom = document.getElementById("indexroom");

// INDEX
indexroom.addEventListener("click", function () {
  ring.style.visibility = "visible";
  sessionStorage.setItem("saveRing", "itemClick");
});
