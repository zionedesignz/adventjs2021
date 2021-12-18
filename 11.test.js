import shouldBuyFidelity from "./11"

test("Challenge #11", () => {
	expect(shouldBuyFidelity(1)).toBe(false)
	expect(shouldBuyFidelity(100)).toBe(true)
})