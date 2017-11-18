import { Planet } from './../js/calc-backend.js';

describe("ageInSec", function() {
  // ageInSec
  it("should calculate entered age in seconds on Earth", function() {
    let earthAgeInYears = 2;
    let earth = new Planet(earthAgeInYears);
    expect(earth.ageInSec()).toEqual(40);
  });

});

describe("ageOnMars", function() {

  it("should calculate entered age on Mars", function() {
    // let earthAgeInYears = " ";
    let earthAgeInYears = 1;
    let mars = new Planet(earthAgeInYears);
    expect(mars.ageOnMars()).toEqual(1.88);
  });

});
