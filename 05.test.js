import daysToXmas from "./05"

const date1 = new Date('Dec 1, 2021')
const date2 = new Date('Dec 24, 2021 00:00:01')
const date3 = new Date('Dec 24, 2021 23:59:59')
const date4 = new Date("December 20, 2021 03:24:00")
const date5 = new Date('Dec 25, 2021')
const date6 = new Date('Dec 26, 2021')
const date7 = new Date('Dec 31, 2021')
const date8 = new Date('Jan 1, 2022 00:00:01')
const date9 = new Date('Jan 1, 2022 23:59:59')

test("Challenge #05", () => {
	expect(daysToXmas(date1)).toBe(24)
  expect(daysToXmas(date2)).toBe(1)
  expect(daysToXmas(date3)).toBe(1)
  expect(daysToXmas(date4)).toBe(5)
  expect(daysToXmas(date5)).toBe(0)
  expect(daysToXmas(date6)).toBe(-1)
  expect(daysToXmas(date7)).toBe(-6)
  expect(daysToXmas(date8)).toBe(-7)
  expect(daysToXmas(date9)).toBe(-7)
})