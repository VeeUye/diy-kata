const { getEmployerRole } = require("../src");
const { employees } = require("./data");

describe("getEmployerRole", () => {
  it("returns the employee's role in the company", () => {
    expect(getEmployerRole("Javid", employees)).toEqual(
      "Human Recommended Reading Assistant"
    );
    expect(getEmployerRole("Jenny", employees)).toEqual("Sales Associate");
  });
});
