import isValid from "./03"

const letterBad = 'peluche (bici [coche) bici coche balón'
const letterGood = 'bici coche (balón) bici coche peluche'

test('Challenge #03', () => {
  expect(isValid(letterBad)).toBe(false)
  expect(isValid(letterGood)).toBe(true)
})