export default function checkIsSameTree(treeA, treeB) {
  let itsSame = true
  const check = (obj1, obj2) => {
    const objEntries1 = Object.entries(obj1)
    const objEntries2 = Object.entries(obj2)
    objEntries1.forEach( entry1 => {
      if (itsSame) {
        const [key1, value1] = entry1
        objEntries2.forEach(entry2 => {
          const [key2, value2] = entry2
          if(key1 === key2) {
            if (value1 instanceof Object) {
              check(value1, value2)
            } else {
              if (value1 !== value2) itsSame = false
            }
          }
        })
      }
    })
  }
  check(treeA, treeB)
  return itsSame
}