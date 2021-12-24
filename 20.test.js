import pangram from "./20"

test("Challenge #20", () => {
  expect(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')).toBe(true)
  expect(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')).toBe(true)
  expect(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')).toBe(false)
  expect(pangram('De la a a la z, nos faltan letras')).toBe(false)
})