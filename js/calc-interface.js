import { Planet, MyDate, Age, LifeRemaining } from './../js/calc-backend.js';

$(document).ready(function() {
  let earth = new Planet ("Earth");
  let mercury = new Planet("Mercury");
  let venus = new Planet("Venus");
  let mars = new Planet("Mars");
  let jupiter = new Planet("Jupiter");
  // let qOne = $("input:radio[name=muffin]:checked").val();
  // let qTwo = $("input:radio[name=suit]:checked").val();
  $(".inputs").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.inputs').focus();
    }
  });
  $(".inputs").on("click", function() {
    $("#age").val("");
  });
  $("#age").on("click", function() {
    $(".inputs").val("");
  });
  $("#ageBtn").click(function(event){
  event.preventDefault();
  // let qOne = $("input:radio[name=muffin]:checked").val();
  // let qTwo = $("input:radio[name=suit]:checked").val();
    if (document.getElementById("age").value.length == 0) {
      $(".clearit").empty();
      let year = parseInt($("#year").val());
      let month = parseInt($("#month").val()) - 1;
      let date = parseInt($("#date").val());
      let newBirthday = new MyDate(year, month, date);
      let age = newBirthday.calcAgeInSec();
      let now = new Date();
      let currentYear = now.getFullYear();
      let seconds = age;
      let ageSeconds = new Age(seconds);
      let ageInYears = ageSeconds.ageSecondsToYear(seconds);
      if (month >= 12 || date >= 31 || year > currentYear) {
          month = false;
          date = false;
          year = false;
          $("#ageOutputEarth").text("Please check on your entry. See example for formatting. Make sure that you didn't enter a month greater than 12, or date greater than 31, or year, greater than " + currentYear);
        } else {
          $("#ageOutputEarth").text("On Earth, you are " + age + " seconds old. Or " + ageInYears + " years");
          $("#ageOutputMercury").text("On Mercury, you are " + mercury.calcPlanetsYears(ageInYears) + " years old.");
          $("#ageOutputVenus").text("On Venus, you are " + venus.calcPlanetsYears(ageInYears) + " years old.");
          $("#ageOutputMars").text("On Mars, you are " + mars.calcPlanetsYears(ageInYears) + " years old.");
          $("#ageOutputJupiter").text("On Jupiter, you are " + jupiter.calcPlanetsYears(ageInYears) + " years old.");
        }
      } else {
          $(".clearit").empty();
          let years = parseFloat($("#age").val()).toFixed(2);
          let earthYears = new Age(years);
          $("#ageOutputEarth").text("On Earth, you are " + earthYears.ageYearToSec(years) + " seconds old.");
          $("#ageOutputMercury").text("On Mercury, you are " + mercury.calcPlanetsYears(years) + " years old.");
          $("#ageOutputVenus").text("On Venus, you are " + venus.calcPlanetsYears(years) + " years old.");
          $("#ageOutputMars").text("On Mars, you are " + mars.calcPlanetsYears(years) + " years old.");
          $("#ageOutputJupiter").text("On Jupiter, you are " + jupiter.calcPlanetsYears(years) + " years old.");
          $("form#life").submit(function(event){
          event.preventDefault();
          // $(".clearit").empty();
          $(".clearitOne").empty();
          let qOne = $("input:radio[name=muffin]:checked").val();
          let qTwo = $("input:radio[name=suit]:checked").val();
          let earth = new LifeRemaining("Earth") ;
          let yearsRemainingEarth = earth.yearsRemaining(years, qOne, qTwo);
          let mercury = new LifeRemaining("Mercury") ;
          let yearsRemainingMercury = mercury.yearsRemaining(years, qOne, qTwo);
          let venus = new LifeRemaining("Venus") ;
          let yearsRemainingVenus = venus.yearsRemaining(years, qOne, qTwo);
          let jupiter = new LifeRemaining("Jupiter") ;
          let yearsRemainingJupiter = jupiter.yearsRemaining(years, qOne, qTwo);
          let mars = new LifeRemaining("Mars") ;
          let yearsRemainingMars = mars.yearsRemaining(years, qOne, qTwo);
          $("#remainingOutputEarth").text("On Earth, you have " + yearsRemainingEarth + " years left.");
          $("#remainingOutputMercury").text("On Mercury, you have " + yearsRemainingMercury + " years left.");
          $("#remainingOutputVenus").text("On Venus, you have " + yearsRemainingVenus + " years left.");
          $("#remainingOutputMars").text("On Mars, you have " + yearsRemainingMars + " years left.");
          $("#remainingOutputJupiter").text("On Jupiter, you have " + yearsRemainingJupiter + " years left.");

          });
        }
      });

});
