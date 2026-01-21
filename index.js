// Code your solution here
// findMatching 
// returns an array of drivers that match the passed in name
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// fuzzyMatch
// returns all drivers whose names begin with the provided letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// matchName
// returns all drivers that match the passed in name
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

// matchName
// returns all drivers that match the passed in name
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}



