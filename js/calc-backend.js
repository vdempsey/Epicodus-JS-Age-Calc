
export class Planet {
  constructor(name, years) {
    this._name = name;
    this._years = years;
  }

  // get years() {
  //   return this._years;
  // }

  // ageOnMars() {
  //   let earthAgeInYears = 1;
  //   let marsYears = parseInt(earthAgeInYears) * 1.88;
  //   return marsYears;
  // }
  //
  //  ageInSec(earthAgeInYears) {
  //    return earthAgeInYears * 20;
  //   // const earthDayInSec = 86400;
  //   // const earthYearInDays = 365;
  //   // const earthYearInSec = 20 //just for testing;
  //   // // 365 * 86400;
  //   // let earthAgeInYears = 1;
  //   // let earthAgeInSec = earthAgeInYears * earthYearInSec;
  //   // return earthAgeInSec;
  //
  // }

ageInSec(earthAgeInYears) {
    const earthDaysInYear = 365;
    const earthDayInSec = 86400;
    const earthYearInSec = 365 * 86400;
    return earthAgeInYears * earthYearInSec;
    // return output;
 }

};
