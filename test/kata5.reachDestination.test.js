const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual(
      `I should be there in ${4.5} hours.`
    );
    expect(reachDestination(15, 3)).toEqual(`I should be there in ${5} hours.`);

    expect(reachDestination(77, 30)).toEqual(
      `I should be there in ${2.5} hours.`
    );
  });
});
