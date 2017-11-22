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


//month selection
  $('#month').on('change', function(){
    let selectedDate = this.value;
    alert(selectedDate);
  });

//to create drop down selection for date
  $("#date").click(function(){
    let lastDate = 31,
    select = document.getElementById('date');

    for (let i = lastDate - 30; i<=lastDate; i++){
      let opt = document.createElement('option');
      opt.value = i;
      opt.innerHTML = i;
      select.appendChild(opt);
      select.onchange = function(){
        let selectedDate = select.options[select.selectedIndex].value;
        alert(selectedDate);
      };
    }
  });
//to create drop down selection for year
  $("#year").click(function(){
  let currentYear = new Date().getFullYear(),
  select = document.getElementById('year');

    for (let i = currentYear - 110; i<=currentYear; i++){
      let opt = document.createElement('option');
      opt.value = i;
      opt.innerHTML = i;
      select.appendChild(opt);
      select.onchange = function(){
        let selectedYear = select.options[select.selectedIndex].value;
        alert(selectedYear);
      };
    }
  });

  $("#ageBtn").click(function(event) {
    // event.preventDefault();
    let year = parseInt("1905");
    let month = parseInt(selectedMonth);
    let date = parseInt(selectedDate);
    let newBirthday = new MyDate(selectedYear, selectedMonth, selectedDate);
    let ageResult = newBirthday.ageYearToSec();
    $("#ageOutput").text("You are " + ageResult + " seconds old");
  });


});
