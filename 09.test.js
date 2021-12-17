import groupBy from "./09"

test("Challenge #09", () => {
	expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
		6: [6.1, 6.3],
		4: [4.2],
	})
	expect(groupBy(["one", "two", "three"], "length")).toEqual({
		3: ["one", "two"],
		5: ["three"],
	})
	expect(groupBy([{ age: 23 }, { age: 24 }], "age")).toEqual({
		23: [{ age: 23 }],
		24: [{ age: 24 }],
	})
	expect(
		groupBy([1397639141184, 1363223700000], (timestamp) =>
			new Date(timestamp).getFullYear()
		)
	).toEqual({ 2013: [1363223700000], 2014: [1397639141184] })
	expect(
		groupBy(
			[
				{ title: "JavaScript: The Good Parts", rating: 8 },
				{ title: "Aprendiendo Git", rating: 10 },
				{ title: "Clean Code", rating: 9 },
			],
			"rating"
		)
	).toEqual({
		8: [{ title: "JavaScript: The Good Parts", rating: 8 }],
		9: [{ title: "Clean Code", rating: 9 }],
		10: [{ title: "Aprendiendo Git", rating: 10 }],
	})
})