
// Code your solution here
const findMatching = (drivers, string) => drivers.filter(driver =>  driver.toLowerCase() === string.toLowerCase() )
const fuzzyMatch= (drivers, string)=> drivers.filter(driver => driver.slice(0,string.length)===string)
const matchName = (drivers, string) => drivers.filter(driverObj => driverObj.name === string )