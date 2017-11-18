
export class Planet {
  constructor(name) {
    this.name = name;
  }

  ageOnMars() {
    let earthAgeInYears = 1;
    let marsYears = parseInt(earthAgeInYears) * 1.88;
    return marsYears;
  }

   ageInSec() {
    // const earthDayInSec = 86400;
    // const earthYearInDays = 365;
    const earthYearInSec = 20 //just for testing;
    // 365 * 86400;
    let earthAgeInYears = 1;
    let earthAgeInSec = earthAgeInYears * earthYearInSec;
    return earthAgeInSec;
  }

};
