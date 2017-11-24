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
    return parseFloat((ageInSeconds / (86400 * 365)).toFixed(2));
  }

  calcMercuryYears(years) {
    let currentRatio = 0.24;
    return parseFloat((years * currentRatio)).toFixed(2);
  }

  calcVenusYears(years) {
    let currentRatio = 0.62;
    return parseFloat((years * currentRatio)).toFixed(2);
  }

  calcMarsYears(years) {
    let currentRatio = 1.88;
    return parseFloat((years * currentRatio)).toFixed(2);
  }

  calcJupiterYears(years) {
    let currentRatio = 11.86;
    return parseFloat((years * currentRatio)).toFixed(2);
  }

};


export class MyDate {
  constructor(year, month, date) {
    this.userInput = new Date(year, month, date);
  }


    calcAgeInSec() {
    // for testing, use: let currentDate = new Date(2017, 10, 21);
    let currentDate = new Date(); //comment this out when testing
    let ageInSeconds = parseFloat((currentDate.getTime() - this.userInput.getTime())/1000).toFixed(2);
    // 1 sec = 1000 miliseconds. getTime() returns miliseconds
    return ageInSeconds;
  }

};
