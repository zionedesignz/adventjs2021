import sumPairs from "./06"

const pair1 = [3, 5, 7, 2]
const result1 = 10
const pair2 = [-3, -2, 7, -5]
const result2 = 10
const pair3 = [2, 2, 3, 1]
const result3 = 4
const pair4 = [6, 7, 1, 2]
const result4 = 8
const pair5 = [0, 2, 2, 3, -1, 1, 5]
const result5 = 6

test("Challenge #06", () => {
	expect(sumPairs(pair1, result1)).toEqual([3, 7])
  expect(sumPairs(pair2, result2)).toEqual(null)
  expect(sumPairs(pair3, result3)).toEqual([2, 2])
  expect(sumPairs(pair4, result4)).toEqual([6, 2])
  expect(sumPairs(pair5, result5)).toEqual([1, 5])
})