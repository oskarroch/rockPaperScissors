let myTimeout;
let bot;
let player;
let clicked = false;

$("button").on("click", () => {
  winner();
  setTimeout(() => {
    $("#blueBg").animate({ left: "0" });
    $("#redBg").animate({ right: "0" });
    newGame();
  }, 1500);
  if (clicked != true) {
    botChoice();
  }
  $("#leftHand").animate({ left: "-100%" });
  setTimeout(() => {
    $("#leftHand").animate({ left: "-300px" });
  }, 1000);
});

$("#rockButton").on("mouseover", () => {
  if (clicked != true) {
    player = "rockLeft";
  }
});

$("#paperButton").on("mouseover", () => {
  if (clicked != true) {
    player = "paperLeft";
  }
});

$("#scissorsButton").on("mouseover", () => {
  if (clicked != true) {
    player = "scissorsLeft";
  }
});

$("button").on("mouseover", () => {
  if (clicked != true) {
    $("#leftHand").removeAttr("class");
    $("#leftHand").addClass(player);
    $("#leftHand").animate({ left: "0" });
    clearTimeout(myTimeout);
  }
});

$("button").on("mouseleave", () => {
  clearTimeout(myTimeout);
  if (clicked != true) {
    myTimeout = setTimeout(() => {
      $("#leftHand").animate({ left: "-100%" });
    }, 2000);
  }
});

function botChoice() {
  clicked = true;
  setTimeout(() => {
    bot = Math.floor(Math.random() * 3);
    $("#rightHand").removeAttr("class");
    if (bot === 0) {
      $("#rightHand").addClass("rockRight");
    } else if (bot === 1) {
      $("#rightHand").addClass("paperRight");
    } else if (bot === 2) {
      $("#rightHand").addClass("scissorsRight");
    }
    $("#rightHand").animate({ right: "-200px" });
  }, 1000);
}

function newGame() {
  setTimeout(() => {
    clicked = false;
    $("#blueBg").animate({ left: "-100%" });
    $("#redBg").animate({ right: "-100%" });
    $("#leftHand").animate({ left: "-100%" });
    $("#rightHand").animate({ right: "-100%" });
  }, 2000);
}

function winner() {
  setTimeout(() => {
    if (bot === player) {
      return;
    } else if (
      (bot === 0 && player === "paperLeft") ||
      (bot === 1 && player === "scissorsLeft") ||
      (bot === 2 && player === "rockLeft")
    ) {
      $("#point").addClass("pointLeft");
    } else if (
      (bot === 0 && player === "scissorsLeft") ||
      (bot === 1 && player === "rockLeft") ||
      (bot === 2 && player === "paperLeft")
    ) {
      $("#point").addClass("pointRight");
    }
  }, 2500);
  setTimeout(() => {
    $("#point").removeAttr("class");
  }, 3000);
}
