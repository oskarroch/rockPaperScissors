let z;
let myTimeout;
let bot;
let clicked = false;

$("button").on("click", () => {
  setTimeout(() => {
    $("#blueBg").animate({ left: "0" });
    $("#redBg").animate({ right: "0" });
  }, 1000);
  if (clicked != true) {
    botChoice();
  }

  startGame();
});

$("#rockButton").on("mouseover", () => {
  if (clicked != true) {
    z = "rockLeft";
  }
});

$("#paperButton").on("mouseover", () => {
  if (clicked != true) {
    z = "paperLeft";
  }
});

$("#scissorsButton").on("mouseover", () => {
  if (clicked != true) {
    z = "scissorsLeft";
  }
});

$("button").on("mouseover", () => {
  $("#leftHand").removeAttr("class");
  $("#leftHand").addClass(z);
  $("#leftHand").animate({ left: "0" });
  clearTimeout(myTimeout);
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
    $("#rightHand").animate({ right: "0" });
  }, 1000);
}

function startGame() {
  $("#leftHand").animate({ left: "-100%" });
  setTimeout(() => {
    $("#leftHand").animate({ left: "0" });
  }, 1000);
}
