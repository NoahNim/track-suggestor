$(document).ready(function() {
  $("form#track-survey").submit(function(event){
    var userInterest = $("div#user-interest input:checked").val();
    console.log(userInterest);
    event.preventDefault();
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
