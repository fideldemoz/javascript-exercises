const palindromes = function (str) {
	str = str.toLowerCase()
	strLength = str.length;
	strLastIndex = strLength - 1;
	
	if (str[strLastIndex] === '.' || str[strLastIndex] === '!' || str[strLastIndex] === '?') {
		str = str.slice(0,strLastIndex)
	}
	newLenght = str.length;
	newLI = newLenght -1;
	counter = 0;
	strStore = []
	newStr = []
	while (counter <= newLI) {
		let char = str[counter];
		if ( char !== ' ' && char !== ',') {
			strStore.push(char);
		}
		counter++;
	}
	
	while (newLI >=0) {
		let char = str[newLI];
		if ( char !== ' ' && char !== ',') {
			newStr.push(char);
		}
		newLI--;
	}
	
	original = strStore.join('')
	palindrome = newStr.join('')

	if (original === palindrome) {
		return true;
	} else {
		return false
	}
};

// Do not edit below this line
module.exports = palindromes;
