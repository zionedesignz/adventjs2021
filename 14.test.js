import missingReindeer from "./14"

test("Challenge #14", () => {
  expect(missingReindeer([0, 2, 3])).toBe(1);
  expect(missingReindeer([5, 6, 1, 2, 3, 7, 0])).toBe(4);
  expect(missingReindeer([0, 1])).toBe(2)
  expect(missingReindeer([3, 0, 1])).toBe(2)
  expect(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])).toBe(8)
  expect(missingReindeer([0])).toBe(1)
})