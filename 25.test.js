import canMouseEat from "./25"

test("Challenge #25", () => {
  expect(canMouseEat(tree, tree)).toBe(true)
  expect(canMouseEat(tree, tree2)).toBe(false)
  expect(canMouseEat(tree2, tree2)).toBe(true)
})