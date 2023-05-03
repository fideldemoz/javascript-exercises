const repeatString = function(word, times) {
if (times < 0) return "ERROR";
	 	let string = '';
	 	let i = 0;
	 	 while (i<times){
	 		string += word;
	 		i++;
	 	}
	 	return string
};


// Do not edit below this line
module.exports = repeatString;
