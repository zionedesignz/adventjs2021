import listGifts from "./02"

const carta = 'bici coche balón _playstation bici coche peluche'

test('Challenge #02', () => {
  expect(listGifts(carta)).toEqual({
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1
  })
})