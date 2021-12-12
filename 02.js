export default function listGifts(letter) {
  const arrLetter = letter.trim().split(' ')
  const arrClean = arrLetter.filter(e => !e.includes('_'))
  const objList = {}
  arrClean.forEach(e => {
    const property = e
    objList.hasOwnProperty(property)
      ? {...objList, property: objList[property]++}
      : Object.defineProperty(objList, property, {writable:true, enumerable:true, value:1})
  })
  return objList
 }