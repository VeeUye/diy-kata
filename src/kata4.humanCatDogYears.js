// needs to be refactored

const humanCatDogYears = (number) => {
  let catYears;
  let dogYears;
  if (number === 1) {
    catYears = 15;
    dogYears = 15;
  }
  if (number >= 2) {
    catYears = (number - 2) * 4 + 24;
    dogYears = (number - 2) * 5 + 24;
  }

  return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
