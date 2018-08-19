// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let map = {}

	for (let key of str) {
		map[key] = map[key] + 1 || 1
	}

	let maxRepNum = Math.max(...Object.values(map))

	return Object.keys(map).find(key => map[key] === maxRepNum)

	// return Object.keys(map).filter(key => {
	//     if(map[key] === maxRepNum) {
	//       return key
	//     }
	// })
}

module.exports = maxChar
