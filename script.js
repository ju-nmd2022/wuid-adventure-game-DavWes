let inventory = [];

let indexroom = document.getElementById("indexroom");
let thering = document.getElementById("thering");
let samimage = document.getElementById("samimage");
let thesam = document.getElementById("thesam");
let bilbo = document.getElementById("bilbo");
let thesting = document.getElementById("thesting");

let ringbutton = document.getElementById("ringbutton");

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

if (sessionStorage.getItem("savethesting") != null) {
  thesting.style.visibility = "visible";
}

ringbutton.addEventListener("click", function () {
  if (sessionStorage.getItem("savethering") === null) {
    alert("You need to take the ring!");
    //Prevents the default behavior of the link.
    //If I didnt have this I would just go to companion.html even though I dont have the ring in storage.
    event.preventDefault();
    location.href = "index.html";
  } else {
    location.href = "companion.html";
  }
});

function startAgain() {
  sessionStorage.removeItem("savethering", "itemClick");
}
