function makeHash(input) {
	input = [...input].map((letter) => letter.charCodeAt(0))
	let hash = 1

	for (let i = 0; i < input.length; i++) {
		if (i % 2 === 0) {
			hash = hash * (input[i] + 1 / (i + 1))
		} else {
			hash = hash / (input[i] - 1 / (i + 1))
		}
	}
	hash = parseInt(hash.toFixed(20).split('.').join(''))
		.toString(16)
		.slice(0, 16)
	return hash
}

// console.log(makeHash('abc'))

console.time('time')
const hash = makeHash(`saju`)
console.timeEnd('time')

console.log(hash)
