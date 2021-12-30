export default function canReconfigure(from, to) {
  let configuration = true
  if (from.length !== to.length) configuration = false
  const controlObject = {}
  const arrFrom = Array.from(from)
  const arrTo = Array.from(to)
  arrFrom.forEach((char, index) => {
    const charArrTo = arrTo[index]
    if (controlObject.hasOwnProperty(char)) {
      const charControlObject = controlObject[char]
      if (charArrTo !== charControlObject) configuration = false
    } else {
      const charValueControlObject = Object.values(controlObject)
      if (charValueControlObject.includes(charArrTo)) configuration = false
      Object.defineProperty(controlObject, char, {
        value: charArrTo,
        enumerable: true,
        writable: true,
      })
    }
  })
  return configuration
}