export default function sumPairs(numbers, result) {
  let pairs = null
	numbers.forEach( (number, index) => {
    const diff = result-number
    if(numbers.includes(diff) && pairs===null){
      const diffIndex = numbers.indexOf(diff)
      if(diffIndex !== index) {
        pairs = new Array(number, numbers[diffIndex])
      }
    }
  })
	return pairs
}