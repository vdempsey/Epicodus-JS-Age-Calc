import { Planet, MyDate, Age, LifeRemaining } from './../js/calc-backend.js';

describe("ageYearToSec", function() {

  it("should calculate entered age in seconds on Earth", function() {
    let earthAgeInYears = 3;
    let age = new Age(earthAgeInYears);
    expect(age.ageYearToSec(earthAgeInYears)).toEqual(3 * 365 * 86400);
  });

});

describe("ageSecondsToYear", function() {

  it("should transform age in seconds to age in years", function() {
    let seconds = 94608000;
    let age = new Age(seconds);
    expect(age.ageSecondsToYear(seconds)).toEqual("3");
  });
});

// describe("calcRemainingYears", function() {
//
//   it("should calculate base remaining years", function() {
//     let years = 15;
//     let earth = new Planet("Earth");
//     let yearsRemaining = earth.calcRemainingYears(years);
//     expect(earth.calcRemainingYears(years)).toEqual("85");
//   });
//
// });
//
// describe("calcAddOrSubtractYears", function() {
//
//   it("should calculate additional years to add or subtract from base life expectancy", function() {
//     let years = new Planet("questionOneYes");
//     let additionalYears = years.calcAddOrSubtractYears();
//     expect(years.calcAddOrSubtractYears()).toEqual(10);
//   });
//
// });

//Start Non-Earth Planet Years

describe("calcPlanetsYears", function() {

  it("should transform earth years into Mercury years", function() {
    let years = 2;
    let mercury = new Planet("Mercury");
    expect(mercury.calcPlanetsYears(years)).toEqual('8.33');
  });

  it("should transform earth years into Venus years", function() {
    let years = 2;
    let venus = new Planet("Venus");
    expect(venus.calcPlanetsYears(years)).toEqual('3.23');
  });

  it("should transform earth years into Mars years", function() {
    let years = 2;
    let mars = new Planet("Mars");
    expect(mars.calcPlanetsYears(years)).toEqual('1.06');
  });

  it("should transform earth years into Jupiter years", function() {
    let years = 2;
    let jupiter = new Planet("Jupiter");
    expect(jupiter.calcPlanetsYears(years)).toEqual('0.17');
  });
});

//End Non-Earth Planet Years

describe("calcAgeInSec", function() {

  it("should calculate the difference in seconds between current date and entered b-day", function() {
    let birthday = new MyDate(2016, 10, 21);
    expect(birthday.calcAgeInSec()).toEqual('31536000');
  });
}); //This test will initially fail. See notes about changing currentDate value in calc-backend.js for testing.

describe("yearsRemaining", function() {

  it("should calculate time remaining on Earth", function() {
    let years = 10;
    let earth = new LifeRemaining("Earth");
    let qOneYes = true;
    let qTwoYes = true;
    let yearsLeft = earth.yearsRemaining(years, qOneYes, qTwoYes);
    expect(yearsLeft).toEqual("80");
  });

  it("should calculate time remaining on Mercury", function() {
    let years = 10;
    let mercury = new LifeRemaining("Mercury");
    let qOneYes = true;
    let qTwoYes = true;
    let yearsLeft = mercury.yearsRemaining(years);
    expect(yearsLeft).toEqual("333.33");
  });

  it("should calculate time remaining on Venus", function() {
    let years = 10;
    let venus = new LifeRemaining("Venus");
    let qOneYes = true;
    let qTwoYes = true;
    let yearsLeft = venus.yearsRemaining(years);
    expect(yearsLeft).toEqual("129.03");
  });

  it("should calculate time remaining on Mars", function() {
    let years = 10;
    let mars = new LifeRemaining("Mars");
    let qOneYes = true;
    let qTwoYes = true;
    let yearsLeft = mars.yearsRemaining(years);
    expect(yearsLeft).toEqual("42.55");
  });

  it("should calculate time remaining on Jupiter", function() {
    let years = 10;
    let jupiter = new LifeRemaining("Jupiter");
    let qOneYes = true;
    let qTwoYes = true;
    let yearsLeft = jupiter.yearsRemaining(years);
    expect(yearsLeft).toEqual("6.75");
  });
});
