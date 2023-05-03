const convertToCelsius = function (fahrenheit) {
  return Math.ceil((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.ceil(((celsius * 9) / 5 + 32) * 10) / 10;
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
