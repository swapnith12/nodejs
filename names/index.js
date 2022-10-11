const peoplelist = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index.js");
const getPeopleInCity = (peoplelist) => {
  return getFirstNames(peoplelist);
};
module.exports = getPeopleInCity;
