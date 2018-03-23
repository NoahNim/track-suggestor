$(document).ready(function() {
  $("form#track-survey").submit(function(event){
    event.preventDefault();

    // These store user input on the webpage into JavaScript for use in this function
    var userInterest = $("div#user-interest input:checked").val();
    var userName = $("#user-name").val();

    // This will make the survey finished div appear
    $("#survey-finished").show();
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
