let inventory = [];

let indexroom = document.getElementById("indexroom");
let thering = document.getElementById("thering");
let samimage = document.getElementById("samimage");
let thesam = document.getElementById("thesam");
let bilbo = document.getElementById("bilbo");
let thesting = document.getElementById("thesting");

const hpCountGollum = document.getElementById("hpGollum");
const hpCountPlayer = document.getElementById("hpPlayer");
const button = document.querySelector("button");

let x = 10;
let y = 10;

hpCountGollum.innerHTML = x;
hpCountPlayer.innerHTML = y;

button.addEventListener("click", function () {
  function randomNumX(min, max) {
    if (hasTheSting && hasTheSam) {
      return Math.floor(Math.random() * (max - min + 1)) + min + 2;
    } else if (hasTheSam) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      alert("You have neither Sting nor Sam! You don't do any damage.");
      return Math.floor(Math.random() * (max - min + 0)) + min;
    }
  }

  // Check if the player has "thesting" in storage
  const hasTheSting = sessionStorage.getItem("savethesting") !== null;
  // Check if the player has "thesam" in storage
  const hasTheSam = sessionStorage.getItem("savethesam") !== null;

  // Generate a random number within the adjusted range based on "thesting"
  const randomNumResultX = randomNumX(0, 1, hasTheSting);

  function randomNumY(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  x = x - randomNumResultX;
  hpCountGollum.innerHTML = x;

  // Check if hpCountGollum is zero or less
  if (x <= 0) {
    // Redirect to winner.html
    window.location.href = "winner.html";
  }

  const randomNumResultY = randomNumY(1, 2);

  y = y - randomNumResultY;
  hpCountPlayer.innerHTML = y;

  // Check if hpCountPlayer is zero or less
  if (y <= 0) {
    // Redirect to loser.html
    window.location.href = "loser.html";
  }
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
