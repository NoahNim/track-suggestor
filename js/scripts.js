$(document).ready(function() {

  $("#track-survey").hide();
  $("#describe").hide();


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

  $("form#track-survey").submit(function(event){
    event.preventDefault();

    $("#begin").hide();
    $("#describe").hide();
    $("#track-survey").hide();

    // These store user input on the webpage into JavaScript for use in this function
    var userInterest = $("div#user-interest input:checked").val();
    var userName = $("#user-name").val();

    // This will make the survey finished div appear
    $("#survey-finished").fadeIn(3000);
    $("#great-job").text("Awesome! " + userName + ",");

    // This is the if else statement that shows a div based on the users selection.
    if (userInterest === "C") {
      $("#CDiv").show();
      $("#PHPDiv").hide();
      $("#JDiv").hide();
    } else if (userInterest === "PHP") {
      $("#PHPDiv").show();
      $("#CDiv").hide();
      $("#JDiv").hide();
    } else if (userInterest === "JS") {
      $("#JDiv").show();
      $("#PHPDiv").hide();
      $("#CDiv").hide();
    }
  });
});
