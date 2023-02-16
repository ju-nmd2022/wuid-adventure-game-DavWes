let inventory = [];

let indexroom = document.getElementById("indexroom");
let thering = document.getElementById("thering");
let samimage = document.getElementById("samimage");
let thesam = document.getElementById("thesam");
let bilbo = document.getElementById("bilbo");
let thesting = document.getElementById("thesting");
// let fightbutton = document.getElementById("fightbutton");
// let fightbuttongollum = document.getElementById("fightbuttongollum");

const hpCount = document.getElementById("number");
const button = document.querySelector("button");

let x = 10;

hpCount.innerHTML = x;

button.addEventListener("click", function () {
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const randomNumResult = randomNum(1, 2);

  x = x - randomNumResult;
  hpCount.innerHTML = x;
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
