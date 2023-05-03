const reverseString = function(word) {
	const lista = [];
	const len = word.length;
	for (let i = 0; i < len; i++) {
		lista[i] = word[i];
	}
	return lista.reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
