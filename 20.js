export default function pangram(letter) {
  const alphabet = 'abcdefghijklmnñopqrstuvwxyz'
  let itsPangram = true
  const letterClear = letter
    .toLowerCase()
    .replace(/á/g, "a")
    .replace(/à/g, "a")
    .replace(/ä/g, "a")
    .replace(/é/g, "e")
    .replace(/è/g, "e")
    .replace(/ë/g, "e")
    .replace(/í/g, "i")
    .replace(/ì/g, "i")
    .replace(/ï/g, "i")
    .replace(/ó/g, "o")
    .replace(/ò/g, "o")
    .replace(/ö/g, "o")
    .replace(/ú/g, "u")
    .replace(/ù/g, "u")
    .replace(/ü/g, "u")
    .replace(/[\s]/gi, "")
  for (const char of alphabet) {
    if (itsPangram) {
      itsPangram = letterClear.includes(char) ? true : false
    }
  }
  return itsPangram
}