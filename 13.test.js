import wrapGifts from "./13"

test("Challenge #12", () => {
  expect(wrapGifts(["📷", "⚽️"])).toEqual(["****", "*📷*", "*⚽️*", "****"]);
  expect(wrapGifts(["🏈🎸", "🎮🧸"])).toEqual([
    "******",
    "*🏈🎸*",
    "*🎮🧸*",
    "******",
  ]);
  expect(wrapGifts(["📷"])).toEqual(["****", "*📷*", "****"])
})