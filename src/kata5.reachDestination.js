const reachDestination = (distance, speed) => {
  const roundUpETA = Math.round((distance / speed) * 2) / 2;
  return `I should be there in ${roundUpETA} hours.`;
};

module.exports = reachDestination;
