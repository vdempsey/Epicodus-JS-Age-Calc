import { Planet, MyDate } from './../js/calc-backend.js';

$(document).ready(function() {
  $("#seconds").click(function(event){
    // event.preventDefaut();
    // let input = parseInt($("#age").val());
    // let earthYears = new Planet(input);
    // let result = earthYears.ageYearToSec(input);
    // $("#output").text("You are " + result + " seconds old");
    // event.preventDefaut();
  });


  $("#ageBtn").click(function(event){

    if ($('input:text').is(":empty")) {
      let year = parseInt($("#year").val());
      let month = parseInt($("#month").val()) - 1;
      let date = parseInt($("#date").val());
      let newBirthday = new MyDate(year, month, date);
      let age = newBirthday.calcAgeInSec();
      let now = new Date();
      let currentYear = now.getFullYear();
      let seconds = age;
      let ageInSeconds = new Planet(seconds);
      let ageInYears = ageInSeconds.calcAgeInYear(seconds);
      let mercury = new Planet(ageInYears);
      let venus = new Planet(ageInYears);
      let mars = new Planet(ageInYears);
      let jupiter = new Planet(ageInYears);
      let ageOnMercury = mercury.calcMercuryYears(ageInYears);
      let ageOnVenus = venus.calcVenusYears(ageInYears);
      let ageOnMars = mars.calcMarsYears(ageInYears);
      let ageOnJupiter = jupiter.calcJupiterYears(ageInYears);
      if (month >= 12 || date >= 31 || year > currentYear) {
        month = false;
        date = false;
        year = false;
        $("#ageOutputEarth").text("Please check on your entry. See example for formatting. Make sure that you didn't enter a month greater than 12, or date greater than 31, or year, greater than " + currentYear);
      }
      $("#ageOutputEarth").text("On Earth, you are " + age + " seconds old. Or " + ageInYears + " years");
      $("#ageOutputMercury").text("On Mercury, you are " + ageOnMercury + " years old.");
      $("#ageOutputVenus").text("On Venus, you are " + ageOnVenus + " years old.");
      $("#ageOutputMars").text("On Mars, you are " + ageOnMars + " years old.");
      $("#ageOutputJupiter").text("On Jupiter, you are " + ageOnJupiter + " years old.");
    }
    else {
      let input = parseInt($("#age").val());
      let earthYears = new Planet(input);
      let result = earthYears.ageYearToSec(input);
      let newMercury = new Planet(input);
      let newVenus = new Planet(input);
      let newMars = new Planet(input);
      let newJupiter = new Planet(input);
      let newAgeOnMercury = newMercury.calcMercuryYears(input);
      let newAgeOnVenus = newVenus.calcVenusYears(input);
      let newAgeOnMars = newMars.calcMarsYears(input);
      let newAgeOnJupiter = newJupiter.calcJupiterYears(input);
      $("#ageOutputMercury").text("On Mercury, you are " + newAgeOnMercury + " years old.");
      $("#ageOutputVenus").text("On Venus, you are " + ageOnVenus + " years old.");
      $("#ageOutputMars").text("On Mars, you are " + ageOnMars + " years old.");
      $("#ageOutputJupiter").text("On Jupiter, you are " + ageOnJupiter + " years old.");

    }
  });


//month selection
  // $('#month').on('change', function(){
  //   let selectedDate = this.value;
  //   alert(selectedDate);
  // });

//to create drop down selection for date
    // $("#date").click(function(){
    //   let lastDate = 31,
    //   select = document.getElementById('date');
    //
    //   for (let i = lastDate - 30; i<=lastDate; i++){
    //     let opt = document.createElement('option');
    //     opt.value = i;
    //     opt.innerHTML = i;
    //     select.appendChild(opt);
    //     select.onchange = function(){
    //       let selectedDate = select.options[select.selectedIndex].value;
    //       alert(selectedDate);
    //     };
    //   }
    // });
//to create drop down selection for year
        // $("#year").click(function(){
        // let currentYear = new Date().getFullYear(),
        // select = document.getElementById('year');
        //
        //   for (let i = currentYear - 110; i<=currentYear; i++){
        //     let opt = document.createElement('option');
        //     opt.value = i;
        //     opt.innerHTML = i;
        //     select.appendChild(opt);
        //     select.onchange = function(){
        //       let selectedYear = select.options[select.selectedIndex].value;
        //       alert(selectedYear);
        //     };
        //   }
        // });

  // $("#ageBtn").click(function(event) {
  //   // event.preventDefault();
  //   let year = parseInt("1905");
  //   let month = parseInt(selectedMonth);
  //   let date = parseInt(selectedDate);
  //   let newBirthday = new MyDate(selectedYear, selectedMonth, selectedDate);
  //   let ageResult = newBirthday.ageYearToSec();
  //   $("#ageOutput").text("You are " + ageResult + " seconds old");
  // });


});
