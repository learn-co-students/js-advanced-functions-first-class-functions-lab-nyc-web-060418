// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  return array.slice(0,2)
}

const returnLastTwoDrivers = function (array) {
  let len
  len = array.length
  return array.slice(len - 2, len)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (int) {
  return function () { return int * int}
}

const fareDoubler = function (int) {
  return int * 2
}

const fareTripler = function (int) {
  return int * 3
}

const selectDifferentDrivers = function (driversArray, driverSelection) {
  return driverSelection(driversArray)
}
