import wrapGifts from "./13"

test("Challenge #13", () => {
  expect(wrapGifts(["📷", "⚽️"])).toEqual(["****", "*📷*", "*⚽️*", "****"]);
  expect(wrapGifts(["🏈🎸", "🎮🧸"])).toEqual([
    "******",
    "*🏈🎸*",
    "*🎮🧸*",
    "******",
  ]);
  expect(wrapGifts(["📷"])).toEqual(["****", "*📷*", "****"])
})