import canReconfigure from "./23"

const from1 = 'BAL'
const to1  = 'LIB'
const from2 = 'CON'
const to2   = 'JUU'
const from3 = 'XBOX'
const to3   = 'XXBO'
const from4 = 'XBOX'
const to4   = 'XOBX'
const from5 = 'MMM'
const to5   = 'MID'

test("Challenge #23", () => {
  expect(canReconfigure(from1, to1)).toBe(true)
  expect(canReconfigure(from2, to2)).toBe(false)
  expect(canReconfigure(from3, to3)).toBe(false)
  expect(canReconfigure(from4, to4)).toBe(true)
  expect(canReconfigure(from5, to5)).toBe(false)
})