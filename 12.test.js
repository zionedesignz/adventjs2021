import getMinJump from "./12"

test("Challenge #12", () => {
	expect(getMinJump([5, 3, 6, 7, 9])).toBe(4)
	expect(getMinJump([2, 4, 6, 8, 10])).toBe(7)
	expect(getMinJump([1, 2, 3, 5])).toBe(4)
	expect(getMinJump([3, 7, 5])).toBe(2)
	expect(getMinJump([9, 5, 1])).toBe(2)
})