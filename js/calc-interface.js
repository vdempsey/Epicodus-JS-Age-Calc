import { Planet } from './../js/calc-backend.js';

$(document).ready(function() {
  $("#seconds").click(function(event){
    // event.preventDefaut();
    let input = parseInt($("#age").val());
    let earthYears = new Planet(input);
    let result = earthYears.ageInSec(input);
    $("#output").text("Your earth age in seconds is " + result);
    // event.preventDefaut();
  });
});
