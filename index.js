// Assigning anonymous functions to variables
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

// Storing functions in an array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function that returns a function to multiply fares
const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};

// Using the higher-order function to create specific multipliers
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// Function that selects drivers based on the function passed as an argument
const selectDifferentDrivers = function (drivers, driverSelector) {
  return driverSelector(drivers);
};
