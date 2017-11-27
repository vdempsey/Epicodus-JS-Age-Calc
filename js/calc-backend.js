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

export class LifeRemaining {
  constructor(name) {
    this.name = name;
    this.expectancy = {
      Earth: 100,
      Mercury: 100/0.24,
      Venus: 100/0.62,
      Mars: 100/1.88,
      Jupiter: 100/11.86
    };
    this.planetRatios = {
      Earth: 1,
      Mercury: 0.24,
      Venus: 0.62,
      Mars: 1.88,
      Jupiter: 11.86
    };
  }

  yearsRemaining(years, qOne, qTwo) {
    years = parseFloat(years).toFixed(2);
    let expectancyBase = this.expectancy[this.name];
    if(qOne == "no") {
      qOne = false;
    } else {
      qOne = true;
    }
    if(qTwo == "no") {
      qTwo = false;
    } else {
      qTwo = true;
    }

    // if (years > 100) {
    //   let value = ((years / this.ratio[this.name]) - this.expectancy[this.name]).toFixed(2);
    //   value = value.replace(/\.00$/,'');
    //   return value;
    if (!qOne && !qTwo) {
      let value = (expectancyBase - (years / this.planetRatios[this.name]) + (10 / this.planetRatios[this.name])).toFixed(2);
      value = value.replace(/\.00$/,'');
      return value;
    } else if (!qOne && qTwo) {
      let value = (expectancyBase - (years / this.planetRatios[this.name])).toFixed(2);
      value = value.replace(/\.00$/,'');
      return value;
    } else if (qOne && qTwo) {
      let value = (expectancyBase - (years / this.planetRatios[this.name]) - (10 / this.planetRatios[this.name])).toFixed(2);
      value = value.replace(/\.00$/,'');
      return value;
    } else {
      let value = (expectancyBase - (years / this.planetRatios[this.name])).toFixed(2);
      value = value.replace(/\.00$/,'');
      return value;
    }
  }

  oldie(years) {
    years = parseFloat(years).toFixed(2);
    let expectancyBase = this.expectancy[this.name];
    let value = ((years / this.planetRatios[this.name]) - expectancyBase).toFixed(2);
    value = value.replace(/\.00$/,'');
    return value;
  }

}
