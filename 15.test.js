import checkSledJump from "./15"

test("Challenge #15", () => {
  expect(checkSledJump([1, 2, 3, 2, 1])).toBe(true)
  expect(checkSledJump([0, 1, 0])).toBe(true)
  expect(checkSledJump([0, 3, 2, 1])).toBe(true)
  expect(checkSledJump([0, 1000, 1])).toBe(true)
  expect(checkSledJump([2, 4, 4, 6, 2])).toBe(false)
  expect(checkSledJump([1, 2, 3])).toBe(false)
  expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toBe(false)
})