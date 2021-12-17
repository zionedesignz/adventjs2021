import maxProfit from "./08"

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
const pricesDoge = [18, 15, 12, 11, 9, 7]
const pricesAda = [3, 3, 3, 3, 3]

test("Challenge #08", () => {
	expect(maxProfit(pricesBtc)).toBe(16)
  expect(maxProfit(pricesEth)).toBe(60)
  expect(maxProfit(pricesDoge)).toBe(-1)
  expect(maxProfit(pricesAda)).toBe(-1)
})