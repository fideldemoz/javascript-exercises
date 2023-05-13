const findTheOldest = function(arr) {
	return arr.reduce((first, current) => {
		const oldestAge = getAge(first.yearOfBirth, first.yearOfDeath)
		const currentAge = getAge(current.yearOfBirth, current.yearOfDeath)
		
		return oldestAge < currentAge ? current : first;
	})
};

const getAge = (birth, death) => { if (!death) {death = new Date().getFullYear();} return death - birth}
// Do not edit below this line
module.exports = findTheOldest;
