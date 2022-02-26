const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(5)).toEqual([5]);
    expect(numberToReversedDigits(543)).toEqual([3, 4, 5]);
  });
});
