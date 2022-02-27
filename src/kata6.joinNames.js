const joinNames = (namesObj) => {
  const namesOnly = namesObj.map((element) => element.name);

  return namesOnly
    .slice(0, -1)
    .join(", ")
    .concat(` & ${namesOnly.pop()}`);

  //   const lastName = namesObj.pop();
  //   const finalArr = namesOnly.concat(lastName);
};

module.exports = joinNames;
