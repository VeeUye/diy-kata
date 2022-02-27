const { joinNames } = require("../src");
const { simpsons, rocinante } = require("./data");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(simpsons)).toEqual("Bart, Lisa & Maggie");
  });
  expect(joinNames(rocinante)).toEqual(
    "Jim, Naomi, Alex, Amos, Bobbie & Clarissa"
  );
});
