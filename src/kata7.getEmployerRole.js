const getEmployerRole = (employeeName, employees) => {
  //   const found = employees.find((element) => element.name === employeeName);
  //   return found.role;

  return employees.find((element) => element.name === employeeName).role;
};

module.exports = getEmployerRole;
