import canCarry from "./21"

test("Challenge #21", () => {
  expect(canCarry(4, [[2, 5, 8], [3, 6, 10]])).toBe(false)
  expect(canCarry(3, [[1, 1, 5], [2, 2, 10]])).toBe(true)
  expect(canCarry(3, [[2, 1, 5],[3, 5, 7]])).toBe(true)
  expect(canCarry(4, [[2, 3, 8],[2, 5, 7]])).toBe(true)
  expect(canCarry(1, [[2, 3, 8]])).toBe(false)
  expect(canCarry(2, [[1, 2, 4], [2, 3, 8]])).toBe(false)
})