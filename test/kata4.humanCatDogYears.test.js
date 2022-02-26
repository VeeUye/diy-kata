const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  xit("returns an array of human years when passed human years", () => {
    expect(humanCatDogYears(10)).toEqual([10]);
  });
});
xit("returns array of human & cat years when passed human years", () => {
  expect(humanCatDogYears(1)).toEqual([1, 15]);
  expect(humanCatDogYears(2)).toEqual([2, 24]);
  expect(humanCatDogYears(5)).toEqual([5, 36]);
  expect(humanCatDogYears(10)).toEqual([10, 56]);
});
it("returns array of human, cat and dog years when passed human years", () => {
  expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
  expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
  expect(humanCatDogYears(5)).toEqual([5, 36, 39]);
  expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
});
