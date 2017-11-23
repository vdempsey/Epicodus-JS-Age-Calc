export class Planet {
  constructor(name, years, seconds, ratio) {
    this.name = name;
    this.years = years;
    this.seconds = seconds;
    this.ratio = ratio;
  }


  ageYearToSec(earthAgeInYears) {
    const earthDaysInYear = 365;
    const earthDayInSec = 86400;
    const earthYearInSec = 365 * 86400;
    return earthAgeInYears * earthYearInSec;
  }

  calcAgeInYear(ageInSeconds) {
    return parseInt((ageInSeconds / (86400 * 365)).toFixed(0));
  }

  calcMercuryYears(years) {
    let currentRatio = 0.24;
    return parseFloat((years * currentRatio));
  }

  calcVenusYears(years) {
    let currentRatio = 0.62;
    return parseFloat((years * currentRatio));
  }

  calcMarsYears(years) {
    let currentRatio = 1.88;
    return parseFloat((years * currentRatio));
  }

  calcJupiterYears(years) {
    let currentRatio = 11.86;
    return parseFloat((years * currentRatio));
  }

};


export class MyDate {
  constructor(year, month, date) {
    this.userInput = new Date(year, month, date);
  }


    calcAgeInSec() {
    // for testing, use: let currentDate = new Date(2017, 10, 21);
    let currentDate = new Date(); //comment this out when testing
    let ageInSeconds = Math.round((currentDate.getTime() - this.userInput.getTime())/1000);
    // 1 sec = 1000 miliseconds. getTime() returns miliseconds
    return ageInSeconds;
  }

};
