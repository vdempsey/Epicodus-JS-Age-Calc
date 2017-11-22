export class Planet {
  constructor(name, years) {
    this.name = name;
    this.years = years;
  }


  ageYearToSec(earthAgeInYears) {
    const earthDaysInYear = 365;
    const earthDayInSec = 86400;
    const earthYearInSec = 365 * 86400;
    return earthAgeInYears * earthYearInSec;
    // return output;
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
