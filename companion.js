let inventory = [];

let indexroom = document.getElementById("indexroom");
let thering = document.getElementById("thering");
let samimage = document.getElementById("samimage");
let thesam = document.getElementById("thesam");
let bilbo = document.getElementById("bilbo");
let thesting = document.getElementById("thesting");

let companionbutton = document.getElementById("companionbutton");

samimage.addEventListener("click", function () {
  inventory.push("samimage");
  thesam.style.visibility = "visible";
  console.log(samimage);
  sessionStorage.setItem("savethesam", "itemClick");
});

if (sessionStorage.getItem("savethesam") != null) {
  thesam.style.visibility = "visible";
}

if (sessionStorage.getItem("savethering") != null) {
  thering.style.visibility = "visible";
}

if (sessionStorage.getItem("savethesting") != null) {
  thesting.style.visibility = "visible";
}

function startAgain() {
  sessionStorage.removeItem("savethesam", "itemClick");
}
