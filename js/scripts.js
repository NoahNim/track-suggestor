$(document).ready(function() {

  // Initial start up code, makes a button appear
  $("#track-survey").hide();
  $("#describe").hide();
  $("#exit-message").hide();
  $("#survey-finished").hide();
  $("#start-button").click(function(event){
    $("#start-button").hide();
    $("#begin").fadeIn(2000);
    $("#begin-p-1").fadeIn(5000)
    $("#begin-p-2").fadeIn(15000)
    $("#um").fadeIn(25000);
    $("#what").fadeIn(25000);
  });


  // This code has the user run through "talking" to the computer
  $("#um").click(function(event){
    $("#begin").hide();
    $("#happy").hide();
    $("#describe").fadeIn(2500);
    $("#cautious").fadeIn(6000);
    $("#describe-p-1").fadeIn(10000);
    $("#describe-p-2").fadeIn(15000);
    $("#start-survey").fadeIn(25000);
  });

  $("#what").click(function(event){
    $("#begin").hide();
    $("#cautious").hide();
    $("#describe").fadeIn(2500);
    $("#happy").fadeIn(6000);
    $("#describe-p-1").fadeIn(10000);
    $("#describe-p-2").fadeIn(15000);
    $("#start-survey").fadeIn(25000);
  });

  $("#start-survey").click(function(event){
    $("#begin").hide();
    $("#describe").hide();
    $("#track-survey").fadeIn(3000);
  });

  // This is the code that is run when the track-survey form button is clicked
  $("form#track-survey").submit(function(event){
    event.preventDefault();

    $("#begin").hide();
    $("#describe").hide();
    $("#track-survey").fadeOut(5000);

    // These store user input on the webpage into JavaScript for use in this function
    var userInterest = $("div#user-interest input:checked").val();
    var userName = $("#user-name").val();
    var userExp = $("#user-experience").val();

    // This will make the survey finished div appear
    $("#survey-finished").fadeIn(20000);
    $("#great-job").text("Awesome! " + userName + ",");

    // This is the if else statement that shows a div based on the users selection.
    if (userInterest === "C" && userExp === "Yes") {
      $("#CDiv").show();
      $("#PHPDiv").hide();
      $("#JDiv").hide();
    } else if (userInterest === "PHP" && userExp === "Yes") {
      $("#PHPDiv").show();
      $("#CDiv").hide();
      $("#JDiv").hide();
    } else if (userInterest === "JS" && userExp === "No" || userInterest === "PHP" && userExp === "No" || userInterest === "C" && userExp === "No") {
      $("#JDiv").show();
      $("#noob").show();
      $("#PHPDiv").hide();
      $("#CDiv").hide();
    } else if (userInterest === "JS" && userExp === "Yes") {
      $("#JDiv").show();
      $("#PHPDiv").hide();
      $("#CDiv").hide();
    }

    $("#exit").fadeIn(25000)
    $("#restart").fadeIn(25000)
  });

  // Fuctionality for when Exit or Restart is clicked
  $("#restart").click(function(event){
    $("#survey-finished").hide();
    $("#start-button").show();
  });

  $("#exit").click(function(event){
    $("#survey-finished").hide();
    $("#exit-message").show();
  });
});
