import { Planet, MyDate } from './../js/calc-backend.js';

$(document).ready(function() {
  $("#seconds").click(function(event){
    // event.preventDefaut();
    let input = parseInt($("#age").val());
    let earthYears = new Planet(input);
    let result = earthYears.ageYearToSec(input);
    $("#output").text("You are " + result + " seconds old");
    // event.preventDefaut();
  });


//to create drop down selection for year
  // $("#year").click(function(event){
  let currentYear = new Date().getFullYear(),
  select = document.getElementById('year');

    for (let i = currentYear - 110; i<=currentYear; i++){
      let opt = document.createElement('option');
      opt.value = i;
      opt.innerHTML = i;
      select.appendChild(opt);
      select.onchange = function(){
        let selectedString = select.options[select.selectedIndex].value;
        alert(selectedString);
      };
    // }
  }

});
