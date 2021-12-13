export default function sumPairs(numbers, result) {
  let res = null
	numbers.forEach( n => {
    const diff = result-n
    if(numbers.includes(diff)){
      const diffIndex = numbers.indexOf(diff)
      res = new Array(numbers[diffIndex], n)
    }
  })
	return res
}