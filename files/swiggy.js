$(".togglecontrolsone").on("click", function(){
  $(".channel-members-wrap").addClass("togglevisibleone");
  $(".member-inner").addClass("togglevisibletwo");
  $(".togglecontrolsone").addClass("disable");
  $(".togglecontrolstwo").addClass("displayblock");
});

function closeToggle(){
  $(".channel-members-wrap").removeClass("togglevisibleone");
  $(".member-inner").removeClass("togglevisibletwo");
  $(".togglecontrolsone").removeClass("disable");
  $(".togglecontrolstwo").removeClass("displayblock");
}

$(".togglecontrolstwo").on("click", function(){
  closeToggle();
});