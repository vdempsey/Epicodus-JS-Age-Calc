export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }
  isAHaiku() {
    if (this.line1 === "" || this.line2 === "" || this.line3 === "") {
      return false;
    }
    else {
      let line1Count = Haiku.getSyllableCount(this.line1);
      let line2Count = Haiku.getSyllableCount(this.line2);
      let line3Count = Haiku.getSyllableCount(this.line3);

      if (line1Count === 5 && line2Count === 7 && line3Count === 5) {
        return true;
      }
    }
    return false;
  }
  static getSyllableCount(line) {
    if (line === "") {
      return 0;
    }
    console.log(line);
    // ie usually one, sometimes two
    const twoSyllableCombos = /eo|ia|ii|io|iu/i;
    const oneSyllableCombos = /aa|ae|ai|ao|au|ea|ee|ei|eu|oa|oe|oi|oo|ou|ua|ue|ui|uo|uu/i;
    const singleVowel = /[aeiou]/i;

    let totalSyllableCount = 0;
    let words = line.split(" ");
    words.forEach(function(word) {
      let vowelsLeft = true;
      let wordSyllableCount = 0;
      while(vowelsLeft) {
        let twoSyllableResult = twoSyllableCombos.exec(word);
        let oneSyllableResult = oneSyllableCombos.exec(word);
        let singleVowelResult = singleVowel.exec(word);

        if (singleVowelResult !== null) {
          if (twoSyllableResult !== null && twoSyllableResult.index <= singleVowelResult.index) {
            wordSyllableCount += 2;
            let chopIndex = twoSyllableResult[0].length + twoSyllableResult.index;
            word = word.substring(chopIndex);
          }
          else if (oneSyllableResult !== null && oneSyllableResult.index <= singleVowelResult.index) {
            wordSyllableCount += 1;
            let chopIndex = oneSyllableResult[0].length + oneSyllableResult.index;
            word = word.substring(chopIndex);
          }
          else {
            if (singleVowelResult[0] === "e" && (singleVowelResult.index === word.length - 1)) {
              vowelsLeft = false;
            }
            else {
              wordSyllableCount += 1;
              let chopIndex = singleVowelResult[0].length + singleVowelResult.index;
              word = word.substring(chopIndex);
            }
          }
        }
        else {
          vowelsLeft = false;
        }
      }
      totalSyllableCount += wordSyllableCount;
    });
    return totalSyllableCount;
  }
}
