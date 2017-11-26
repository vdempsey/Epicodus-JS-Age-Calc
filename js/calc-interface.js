import { Planet, MyDate, Age } from './../js/calc-backend.js';

$(document).ready(function() {
  let mercury = new Planet("Mercury");
  let venus = new Planet("Venus");
  let mars = new Planet("Mars");
  let jupiter = new Planet("Jupiter");
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
    if (document.getElementById("age").value.length == 0) {
      $(".clearit").empty();
      // $("#ageOutputEarth").empty();
      // $("#ageOutputMercury").empty();
      // $("#ageOutputVenus").empty();
      // $("#ageOutputMars").empty();
      // $("#ageOutputEarthOne").empty();
      // $("#ageOutputMercuryOne").empty();
      // $("#ageOutputVenusOne").empty();
      // $("#ageOutputMarsOne").empty();
      // $("#ageOutputJupiterOne").empty();
      // $("#ageOutputJupiter").empty();
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
          $("#ageOutputEarthOne").text("On Earth, you are " + age + " seconds old. Or " + ageInYears + " years");
          $("#ageOutputMercuryOne").text("On Mercury, you are " + mercury.calcPlanetsYears(ageInYears) + " years old.");
          $("#ageOutputVenusOne").text("On Venus, you are " + venus.calcPlanetsYears(ageInYears) + " years old.");
          $("#ageOutputMarsOne").text("On Mars, you are " + mars.calcPlanetsYears(ageInYears) + " years old.");
          $("#ageOutputJupiterOne").text("On Jupiter, you are " + jupiter.calcPlanetsYears(ageInYears) + " years old.");
        }
      } else {
          $(".clearit").empty();
          // $("#ageOutputEarthOne").empty();
          // $("#ageOutputMercuryOne").empty();
          // $("#ageOutputVenusOne").empty();
          // $("#ageOutputMarsOne").empty();
          // $("#ageOutputJupiterOne").empty();
          // $("#ageOutputEarth").empty();
          // $("#ageOutputMercury").empty();
          // $("#ageOutputVenus").empty();
          // $("#ageOutputMars").empty();
          // $("#ageOutputJupiter").empty();
          let years = parseFloat($("#age").val()).toFixed(2);
          let earthYears = new Age(years);
          $("#ageOutputEarth").text("On Earth, you are " + earthYears.ageYearToSec(years) + " seconds old.");
          $("#ageOutputMercury").text("On Mercury, you are " + mercury.calcPlanetsYears(years) + " years old.");
          $("#ageOutputVenus").text("On Venus, you are " + venus.calcPlanetsYears(years) + " years old.");
          $("#ageOutputMars").text("On Mars, you are " + mars.calcPlanetsYears(years) + " years old.");
          $("#ageOutputJupiter").text("On Jupiter, you are " + jupiter.calcPlanetsYears(years) + " years old.");
        }
      });
});
