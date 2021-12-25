const trex = document.getElementById("trex");
const kaktus = document.getElementById("kaktus");
const button = document.querySelector(".btn");
const gameOver = document.querySelector(".game-over");
const score = document.querySelector(".score");
var count = 0;

document.body.addEventListener("click", jump);
button.addEventListener("click", restart);

function jump() {
  if (kaktus.classList != "kaktus-animate") {
    kaktus.classList.add("kaktus-animate");
  }

  if (trex.classList != "trex-animate") {
    trex.classList.add("trex-animate");
    setTimeout(() => {
      trex.classList.remove("trex-animate");
    }, 500);
  }
}

// restart



function restart() {
  if (
    kaktus.classList != "kaktus-animate" &&
    trex.classList != "trex-animate"
  ) {
    kaktus.classList.add("kaktus-animate");
    trex.style.visibility = "visible";
    kaktus.style.visibility = "visible";
    gameOver.classList.remove("done");
    score.innerHTML = "0";
    count = 0;
  }
};

// crash
var carpismaKontrol = setInterval(() => {
  var trexBottomPosition = parseInt(
    window.getComputedStyle(trex).getPropertyValue("bottom")
  );
  var kaktusLeftPosition = parseInt(
    window.getComputedStyle(kaktus).getPropertyValue("left")
  );
  var trexLeftPosition = parseInt(
    window.getComputedStyle(trex).getPropertyValue("left")
  );

  if (kaktusLeftPosition > 0 && kaktusLeftPosition < 40 && trexBottomPosition < 40) {
    kaktus.classList.remove("kaktus-animate");
    trex.classList.remove("trex-animate");
    trex.style.visibility = "hidden";
    kaktus.style.visibility = "hidden";
    gameOver.classList.add("done");
  } else if (trexLeftPosition == kaktusLeftPosition && trexBottomPosition > 46) {
    
      count += 1;
      score.innerHTML = `${count}`;
    
  }
}, 10);
