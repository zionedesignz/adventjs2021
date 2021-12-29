export default function countDecorations(bigTree) {
  let decorations = 0
  const obtainDecorationsOfObject = (obj) => {
    const objEntries = Object.entries(obj)
    objEntries.forEach(entry =>{
      const [key, value] = entry
      if(key==='value') decorations += value
      if(value instanceof Object) obtainDecorationsOfObject(value)
    })
  }
  obtainDecorationsOfObject(bigTree)
  return decorations
}