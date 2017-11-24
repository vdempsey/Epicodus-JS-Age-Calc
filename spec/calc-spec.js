import { Planet, MyDate } from './../js/calc-backend.js';

describe("ageYearToSec", function() {

  it("should calculate entered age in seconds on Earth", function() {
    let earthAgeInYears = 3;
    let earth = new Planet(earthAgeInYears);
    let output = earth.ageYearToSec(earthAgeInYears);
    expect(output).toEqual(3 * 365 * 86400);
  });

});

describe("calcAgeInYear", function() {

  it("should transform age in seconds to age in years", function() {
    let seconds = 94608000;
    let ageInSeconds = new Planet(seconds);
    let ageInYear = ageInSeconds.calcAgeInYear(seconds);
    expect(ageInYear).toEqual(3);
  });
});

describe("calcMercuryYears", function() {

  it("should transform earth years into Mercury years", function() {
    let years = 2;
    let mercury = new Planet(years);
    let ageOnMercury = mercury.calcMercuryYears(years);
    expect(ageOnMercury).toEqual('0.48');
  });
});

describe("calcVenusYears", function() {

  it("should transform earth years into Venus years", function() {
    let years = 2;
    let venus = new Planet(years);
    let ageOnVenus = venus.calcVenusYears(years);
    expect(ageOnVenus).toEqual('1.24');
  });
});

describe("calcMarsYears", function() {

  it("should transform earth years into Mars years", function() {
    let years = 2;
    let mars = new Planet(years);
    let ageOnMars = mars.calcMarsYears(years);
    expect(ageOnMars).toEqual('3.76');
  });
});

describe("calcJupiterYears", function() {

  it("should transform earth years into Jupiter years", function() {
    let years = 2;
    let jupiter = new Planet(years);
    let ageOnJupiter = jupiter.calcJupiterYears(years);
    expect(ageOnJupiter).toEqual('23.72');
  });
});


describe("calcAgeInSec", function() {

  it("should calculate the difference in seconds between current date and entered b-day", function() {
    let birthday = new MyDate(2016, 10, 21);
    let ageInSeconds = birthday.calcAgeInSec();
    expect(ageInSeconds).toEqual('31536000');
  });
}); //This test will initially fail. See notes about changing currentDate value in calc-backend.js for testing.
