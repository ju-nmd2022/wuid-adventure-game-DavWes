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

companionbutton.addEventListener("click", function () {
  if (sessionStorage.getItem("savethesam") === null) {
    alert("You need sam!");
    location.href = "companion.html";
  } else {
    location.href = "bilbo.html";
  }
});

function startAgain() {
  sessionStorage.removeItem("savethesam", "itemClick");
}
