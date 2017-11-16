import { Haiku } from './../js/Haiku.js';

describe("Haiku", function() {
  // Constructor
  it("should make a haiku with 3 lines", function() {
    let testHaiku = new Haiku("line one", "line 2", "line 3");
    expect(testHaiku.line1).not.toEqual(undefined);
    expect(testHaiku.line2).not.toEqual(undefined);
    expect(testHaiku.line3).not.toEqual(undefined);
  });

  // isAHaiku
  it("shouldn't be a haiku if any lines are blank", function() {
    let testHaiku = new Haiku("", "", "");
    expect(testHaiku.isAHaiku()).toEqual(false);
  });

  it("should be a haiku if the lines syllables follow the 5-7-5 pattern", function() {
    let testHaiku = new Haiku("Whitecaps on the bay", "a broken signboard banging", "in the april wind");
    expect(testHaiku.isAHaiku()).toEqual(true);
  });

  //Haiku get syllablecount
  it("should give zero for a blank line", function() {
    let line = "";
    expect(Haiku.getSyllableCount(line)).toEqual(0);
  });

  it("should be able to count the number of vowels in a word", function(){
    let line = "cat";
    expect(Haiku.getSyllableCount(line)).toEqual(1);
  });

  it("should not count silent e  as syllables", function(){
    let line = "rate";
    expect(Haiku.getSyllableCount(line)).toEqual(1);
  });

  it("should count non-silent e as syllables", function(){
    let line = "rated";
    expect(Haiku.getSyllableCount(line)).toEqual(2);
  });

  it("should count diphthong vowel pairs as a single syllable", function(){
    let line = "router";
    expect(Haiku.getSyllableCount(line)).toEqual(2);
  });

  it("should count non-diphthong vowels pairs as two syllables", function(){
    let line = "riot";
    expect(Haiku.getSyllableCount(line)).toEqual(2);
  });

  it("should count the syllables of lines longer than one word", function(){
    let line = "white caps on cat bay";
    expect(Haiku.getSyllableCount(line)).toEqual(5);
  });
});
