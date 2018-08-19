// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	let chunkArr = []

	function __makeChunks(array, size) {
		if (array.length > size) {
			let tempArr = array.slice(0, size)
			chunkArr.push(tempArr)
			let newArr = array.splice(size, array.length - 1)
			__makeChunks(newArr, size)
		} else {
			chunkArr.push(array)
		}
	}

	__makeChunks(array, size)

	return chunkArr
}

module.exports = chunk
