import { Planet, MyDate, Age, LifeRemaining } from './../js/calc-backend.js';

$(document).ready(function() {
  let earth = new Planet ("Earth");
  let mercury = new Planet("Mercury");
  let venus = new Planet("Venus");
  let mars = new Planet("Mars");
  let jupiter = new Planet("Jupiter");
  let earthRemaining = new LifeRemaining("Earth");
  let mercuryRemaining = new LifeRemaining("Mercury");
  let venusRemaining = new LifeRemaining("Venus");
  let marsRemaining = new LifeRemaining("Mars");
  let jupiterRemaining = new LifeRemaining("Jupiter");
  let qOne;
  let qTwo;

  $(".btn").on("click", function() {
    qOne = $("input:radio[name=muffin]:checked").val();
    qTwo = $("input:radio[name=suit]:checked").val();
  });

  $(".inputs").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.inputs').focus();
    }
  });
  $(".inputs").on("click", function() {
    $("#age").val("");
    $(".clearit").empty();
  });
  $("#age").on("click", function() {
    $(".inputs").val("");
    $(".clearit").empty();
  });
  $("#ageBtn").click(function(event){
    event.preventDefault();
    if (document.getElementById("age").value.length == 0) {
      $(".clearit").empty();
      $(".clearitOne").empty();
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
          $("form#life").submit(function(event){
            event.preventDefault();
            $(".clearit").empty();
            if (parseInt(ageInYears) > 100) {
              let overYearsEarth = earthRemaining.oldie(ageInYears);
              let overYearsMars = marsRemaining.oldie(ageInYears);
              let overYearsMercury = mercuryRemaining.oldie(ageInYears);
              let overYearsVenus = venusRemaining.oldie(ageInYears);
              let overYearsJupiter = jupiterRemaining.oldie(ageInYears);
              // alert("You are old!");
              $("#oldie").text("Good for you!!! You outlived most of us on Earth by " + overYearsEarth + " years. If you ever make it to Mercury, you will find yourself " + overYearsMercury + " years older than most Mercurians, on Mars you surpassed them by " + overYearsMars + " years. On Venus you are outlived an average Venusian by " + overYearsVenus + " years, and on Jupiter by " + overYearsJupiter + " . Now, go explore the space. You have nothing to loose.");
              // $("#oldie").text("Hello Youngster! You outlived most of us on Earth by " + overYearsEarth + " years! You outlived most of Marcians by " + overYearsMars + " years. You outlived most of creatures on Venus by " + overYearsVenus + " years. You outlived most of Mercury folks by " + overYearsMercury + " years. You outlived most of creatures on Jupiter by " + overYearsMercury + " years. Now, go explore the space. You have nothing to loose.");
            } else {
              let yearsRemainingEarth = earthRemaining.yearsRemaining(ageInYears, qOne, qTwo);
              let yearsRemainingMercury = mercuryRemaining.yearsRemaining(ageInYears, qOne, qTwo);
              let yearsRemainingVenus = venusRemaining.yearsRemaining(ageInYears, qOne, qTwo);
              let yearsRemainingJupiter = jupiterRemaining.yearsRemaining(ageInYears, qOne, qTwo);
              let yearsRemainingMars = marsRemaining.yearsRemaining(ageInYears, qOne, qTwo);
              $("#remainingOutputEarth").text("On Earth, you have " + yearsRemainingEarth + " years left.");
              $("#remainingOutputMercury").text("On Mercury, you have " + yearsRemainingMercury + " years left.");
              $("#remainingOutputVenus").text("On Venus, you have " + yearsRemainingVenus + " years left.");
              $("#remainingOutputMars").text("On Mars, you have " + yearsRemainingMars + " years left.");
              $("#remainingOutputJupiter").text("On Jupiter, you have " + yearsRemainingJupiter + " years left.");
            }
          });
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
          $(".clearit").empty();
          $(".clearitOne").empty();
          if (parseInt(years) > 100) {
            let overYearsEarth = earthRemaining.oldie(years);
            let overYearsMars = marsRemaining.oldie(years);
            let overYearsMercury = mercuryRemaining.oldie(years);
            let overYearsVenus = venusRemaining.oldie(years);
            let overYearsJupiter = jupiterRemaining.oldie(years);
            $("#oldie").text("Good for you!!! You outlived most of us on Earth by " + overYearsEarth + " years. If you ever make it to Mercury, you will find yourself " + overYearsMercury + " years older than most Mercurians, on Mars you surpassed them by " + overYearsMars + " years. On Venus you are outlived an average Venusian by " + overYearsVenus + " years, and on Jupiter by " + overYearsJupiter + " . Now, go explore the space. You have nothing to loose.");
            } else {
            let yearsRemainingEarth = earthRemaining.yearsRemaining(years, qOne, qTwo);
            let yearsRemainingMercury = mercuryRemaining.yearsRemaining(years, qOne, qTwo);
            let yearsRemainingVenus = venusRemaining.yearsRemaining(years, qOne, qTwo);
            let yearsRemainingJupiter = jupiterRemaining.yearsRemaining(years, qOne, qTwo);
            let yearsRemainingMars = marsRemaining.yearsRemaining(years, qOne, qTwo);
            $("#remainingOutputEarth").text("On Earth, you have " + yearsRemainingEarth + " years left.");
            $("#remainingOutputMercury").text("On Mercury, you have " + yearsRemainingMercury + " years left.");
            $("#remainingOutputVenus").text("On Venus, you have " + yearsRemainingVenus + " years left.");
            $("#remainingOutputMars").text("On Mars, you have " + yearsRemainingMars + " years left.");
            $("#remainingOutputJupiter").text("On Jupiter, you have " + yearsRemainingJupiter + " years left.");
            }
          });
        }
      });

});
