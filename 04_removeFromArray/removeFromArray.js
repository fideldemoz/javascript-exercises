var removeFromArray = function(array, ...choice) {
  return array.filter(val => !choice.includes(val))
 }

// Do not edit below this line
module.exports = removeFromArray;
