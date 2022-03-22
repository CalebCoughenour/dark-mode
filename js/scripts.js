$(document).ready(function() {

  $("button.dark").click(function() {
    $("body").removeClass();
    $("body").addClass("grey-background");
  });

  $("button.light").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });




});