let inventory = [];

let indexroom = document.getElementById("indexroom");
let thering = document.getElementById("thering");
let samimage = document.getElementById("samimage");
let thesam = document.getElementById("thesam");
let bilbo = document.getElementById("bilbo");
let thesting = document.getElementById("thesting");

indexroom.addEventListener("click", function () {
  inventory.push("indexroom");
  thering.style.visibility = "visible";
  console.log(indexroom);
  sessionStorage.setItem("savethering", "itemClick");
});

if (sessionStorage.getItem("savethesam") != null) {
  thesam.style.visibility = "visible";
}

if (sessionStorage.getItem("savethering") != null) {
  thering.style.visibility = "visible";
}

function startAgain() {
  sessionStorage.removeItem("savethering", "itemClick");
}
