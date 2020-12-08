
// Code your solution here
const findMatching = (drivers, string) => drivers.filter(driver =>  driver.toLowerCase() === string.toLowerCase() )
const fuzzyMatching= (drivers, string)=> drivers.filter(driver=>driver.toLowerCase().startsWith(string.toLowerCase()))
