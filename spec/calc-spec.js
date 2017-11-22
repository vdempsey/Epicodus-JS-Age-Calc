import { Planet, MyDate } from './../js/calc-backend.js';

describe("ageYearToSec", function() {

  it("should calculate entered age in seconds on Earth", function() {
    let earthAgeInYears = 3;
    let earth = new Planet(earthAgeInYears);
    let output = earth.ageYearToSec(earthAgeInYears);
    expect(output).toEqual(3 * 365 * 86400);
  });

});

describe("calcAgeInSec", function() {

  it("should calculate the difference in seconds between current date and entered b-day", function() {
    let birthday = new MyDate(2016, 10, 21);
    let ageInSeconds = birthday.calcAgeInSec();
    expect(ageInSeconds).toEqual(1 * 365 * 86400);
  });
}); //This test will initially fail. See notes about changing currentDate value in calc-backend.js for testing.
