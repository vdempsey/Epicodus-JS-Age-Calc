import {Haiku} from './../js/Haiku.js';

describe('Haiku constructor', function() {
  it('should make a haiku with 3 lines', function() {
    let haiku = new Haiku("this is line 1", "this is line 2", "this is line 3");
    expect(haiku.line1).not.toEqual(undefined);
    expect(haiku.line2).not.toEqual(undefined);
    expect(haiku.line3).not.toEqual(undefined);
  });
});


describe('Haiku isAHaiku', function() {
  it("should not be a haiku if any lines are blank", function() {
    let newHaiku = new Haiku("", "", "");
    expect(newHaiku.isAHaiku()).toEqual(false);
  });
//failing
  it("should be a haiku if the lines' syllables follow the 5-7-5 pattern", function() {
    let newHaiku = new Haiku("Whitecaps on the bay", "A broken signboard banging", "In the April wind");
    expect(newHaiku.isAHaiku()).toEqual(true);
  });
});

describe('Haiku getSyllableCount', function() {
  it("should give zero for a blank line", function() {
    let line = "";
    let newHaiku = new Haiku("one", "two", "three");
    expect(newHaiku.getSyllableCount(line)).toEqual(0);
  });

  it("should be able to count the number of vowels in a word", function() {
    let line = "cat";
    let newHaiku = new Haiku("one", "two", "three");
    expect(newHaiku.getSyllableCount(line)).toEqual(1);
  });

  it("should not count silent e's as syllables", function() {
    let line = "rate";
    let newHaiku = new Haiku("one", "two", "three");
    expect(newHaiku.getSyllableCount(line)).toEqual(1);
  });

  it("should count non-silent e's as syllables", function() {
    let line = "rated";
    let newHaiku = new Haiku("one", "two", "three");
    expect(newHaiku.getSyllableCount(line)).toEqual(2);
  });
//failing
  it("should count diphthong vowel pairs as a single syllable", function() {
    let line = "router";
    let newHaiku = new Haiku("one", "two", "three");
    expect(newHaiku.getSyllableCount(line)).toEqual(2);
  });

  it("should count non-diphthong vowel pairs as two syllables", function() {
    let line = "riot";
    let newHaiku = new Haiku("one", "two", "three");
    expect(newHaiku.getSyllableCount(line)).toEqual(2);
  });

  it("should count the syllables of lines longer than one word", function() {
    let line = "whitecaps on the bay";
    let newHaiku = new Haiku("one", "two", "three");
    expect(newHaiku.getSyllableCount(line)).toEqual(5);
  });

  it("should count the syllables of lines longer than one word 2", function() {
    let line = "A broken signboard banging";
    let newHaiku = new Haiku("one", "two", "three");
    expect(newHaiku.getSyllableCount(line)).toEqual(7);
  });

  it("should count the syllables of lines longer than one word 3", function() {
    let line = "In the April wind";
    let newHaiku = new Haiku("one", "two", "three");
    expect(newHaiku.getSyllableCount(line)).toEqual(5);
  });

});
