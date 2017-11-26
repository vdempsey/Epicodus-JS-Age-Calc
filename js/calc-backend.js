export class Planet {
  constructor(name) {
    this.name = name;
    this.planetRatios = {
      Earth: 1,
      Mercury: 0.24,
      Venus: 0.62,
      Mars: 1.88,
      Jupiter: 11.86
    };
    // this.planetLifeExpectancy = {
    //   Earth: 100,
    //   Mercury: 24,
    //   Venus: 62,
    //   Mars: 188,
    //   Jupiter: 118.6
    // };
    const earthDaysInYear = 365;
    const earthDayInSec = 86400;
  }

  calcPlanetsYears(years) {
    years = parseFloat(years).toFixed(2);
    let ratio = this.planetRatios[this.name];
    let value = parseFloat(years / ratio).toFixed(2);
    value = value.replace(/\.00$/,'');
    return value;
  }

  calcRemainingYears(years) {
    years = parseFloat(years).toFixed(2);
    let lifeExpectancyBase = this.planetRatios[this.name] * 100;
    let remaining = parseFloat(lifeExpectancyBase - years).toFixed(2);
    remaining = remaining.replace(/\.00$/,'');
    return remaining;
  }

}


export class MyDate {
  constructor(year, month, date) {
    this.userInput = new Date(year, month, date);
  }

    calcAgeInSec() {
    // for testing, use: let currentDate = new Date(2017, 10, 21);
    let currentDate = new Date(); //comment this out when testing
    let ageInSeconds = parseFloat((currentDate.getTime() - this.userInput.getTime())/1000).toFixed(0);
    // 1 sec = 1000 miliseconds. getTime() returns miliseconds
    return ageInSeconds;
  }

}

export class Age {
  constructor(years, seconds) {
    this.years = years;
    this.seconds = seconds;
    const earthDaysInYear = 365;
    const earthDayInSec = 86400;
  }

  ageYearToSec(years) {
    let value = parseInt(this.years * 365 * 86400);
    return value;
  }

  ageSecondsToYear(seconds) {
    let value = parseFloat(seconds / (86400 * 365)).toFixed(2);
    value = value.replace(/\.00$/,'');
    return value;
  }

}
