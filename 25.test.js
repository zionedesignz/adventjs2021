import canMouseEat from "./25"

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

test("Challenge #25", () => {
  expect(canMouseEat('up',    room)).toBe(false)
  expect(canMouseEat('down',  room)).toBe(true)
  expect(canMouseEat('right', room)).toBe(false)
  expect(canMouseEat('left', room)).toBe(false)
  expect(canMouseEat('up',    room2)).toBe(false)
  expect(canMouseEat('down',  room2)).toBe(false)
  expect(canMouseEat('right', room2)).toBe(true)
  expect(canMouseEat('left', room2)).toBe(false)
})