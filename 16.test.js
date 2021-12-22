import decodeNumber from "./16"

test("Challenge #16", () => {
  expect(decodeNumber('...')).toBe(3)
  expect(decodeNumber('.,')).toBe(4);
  expect(decodeNumber(',.')).toBe(6)
  expect(decodeNumber(',...')).toBe(8)
  expect(decodeNumber('.........!')).toBe(107)
  expect(decodeNumber('.;')).toBe(49)
  expect(decodeNumber('..,')).toBe(5)
  expect(decodeNumber('..,!')).toBe(95)
  expect(decodeNumber('.;!')).toBe(49)
  expect(decodeNumber('!!!')).toBe(300)
  expect(decodeNumber(';!')).toBe(50)
  expect(decodeNumber(';.W')).toBe(NaN)
})