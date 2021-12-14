export default function contains(store, product) {
  const toArray = obj => Object.values(obj)
  const arrayStore = toArray(store)
  const toArrayOfStrings = (arr) => ( 
    arr.flatMap(el => {
      if(typeof el === 'string') return el
      if (el instanceof Object) {
        const arrayOfObject = toArray(el)
        return toArrayOfStrings(arrayOfObject)
      }
    })
  )
  const flatArrayStore = toArrayOfStrings(arrayStore)
  const isProductOnStore = flatArrayStore.includes(product) ? true : false
  return isProductOnStore
}