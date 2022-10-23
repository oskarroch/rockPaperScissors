$("button").click(() => {
  $("#blueBg").animate({ left: "0" });
  $("#redBg").animate({ right: "0" });
});

$("#rockButton").mouseover(() => {
  $("#leftHand").removeAttr("class");
  $("#leftHand").addClass("rockLeft");
  $("#leftHand").animate({ left: "0" });
});

$("#paperButton").mouseover(() => {
  $("#leftHand").removeAttr("class");
  $("#leftHand").addClass("paperLeft");
  $("#leftHand").animate({ left: "0" });
});

$("#scissorsButton").mouseover(() => {
  $("#leftHand").removeAttr("class");
  $("#leftHand").addClass("scissorsLeft");
  $("#leftHand").animate({ left: "0" });
});
