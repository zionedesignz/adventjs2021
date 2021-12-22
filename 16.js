export default function decodeNumber(symbols) {
  const values = { ".": 1, ",": 5, ":": 10, ";": 50, "!": 100 }
  const arrSymbols = symbols.split('')
  const lastPosition = arrSymbols.length - 1
  const arrNumbers = arrSymbols.map((symbol, index) => {
    const actValue = values[symbol]
    if (index !== lastPosition) {
      const nextSymbol = arrSymbols[index + 1]
      const nextValue = values[nextSymbol]
      return actValue < nextValue ? `-${actValue}` : `+${actValue}`
    }
    return `+${actValue}`
  })
  const stringNumbers = arrNumbers.join('')
  const secretNumber = eval(stringNumbers)
  return secretNumber
}