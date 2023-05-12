const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
	if (arr.length == 0) {
		return 0;
	}
	arr.forEach((number) => {
		sum += number;
	});
	return sum;
};

const multiply = function(arr) {
	let temp = 1;
	arr.forEach((number) => {
		temp *= number;
	});
	return temp;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
	let factorial = n;
	if (n === 0) return 1;
	for (let i = n-1; i>0; i--) {
		factorial *= i;
	}
	return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
