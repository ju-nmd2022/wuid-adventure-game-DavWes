let isRingPicked = false;
let isSamPicked = false;
let isStingPicked = false;

// INDEX
window.addEventListener("load", function () {});
if (window.localStorage.isRingPicked === true) {
  document.getElementById("thering").style.display = "block";
  const indexroom = document.getElementById("indexroom");
  indexroom.src = "images/thering.png";
}

const thering = document.getElementById("thering");

indexroom.addEventListener("click", function () {
  document.getElementById("thepick").style.display = "block";
  indexroom.src = "images/thering.png";
  window.localStorage.isRingPicked = true;
  console.log("hejhej");
});

// else {
//   // alert("You forgot to take the ring");
// }
