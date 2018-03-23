$(document).ready(function() {
  $("form#track-survey").submit(function(event){
    event.preventDefault();
    var userInterest = $("div#user-interest input:checked").val();

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
