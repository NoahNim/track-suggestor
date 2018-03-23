$(document).ready(function() {
  $("form#track-survey").submit(function(event){
    var userInterest = $("div#user-interest input:checked").val();
    console.log(userInterest);

    
  });
});
