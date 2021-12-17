import createXmasTree from "./04"

test("Challenge #04", () => {
  expect(createXmasTree(3)).toBe(
		"__*__\n" +
    "_***_\n" +
    "*****\n" +
    "__#__\n" +
    "__#__"
	)
	expect(createXmasTree(5)).toBe(
		"____*____\n" +
    "___***___\n" +
    "__*****__\n" +
    "_*******_\n" +
    "*********\n" +
    "____#____\n" +
    "____#____"
	)
})