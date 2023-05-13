const fibonacci = function(n) {
	let Phi = (1 + Math.sqrt(5)) / 2
	let phi = (1 - Math.sqrt(5)) / 2
	return n < 0 ? "OOPS" : parseInt((Phi ** n - phi ** n) / Math.sqrt(5));
};

// Do not edit below this line
module.exports = fibonacci;
