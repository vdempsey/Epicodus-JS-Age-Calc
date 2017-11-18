import { Planet } from './../js/calc-backend.js';

describe("ageInSec", function() {
  // ageInSec
  it("should calculate entered age in seconds on Earth", function() {
    let earthAgeInYears = 3;
    let earth = new Planet(earthAgeInYears);
    let output = earth.ageInSec(earthAgeInYears);
    expect(output).toEqual(3 * 365 * 86400);
  });

});

// describe("ageOnMars", function() {
//
//   it("should calculate entered age on Mars", function() {
//     // let earthAgeInYears = " ";
//     let earthAgeInYears = 1;
//     let mars = new Planet(earthAgeInYears);
//     expect(mars.ageOnMars()).toEqual(1.88);
//   });

// });
