export default function groupBy(collection, it) {
  let obj = {}
  
  collection.map(element => {
    const property = it instanceof Function 
      ? it(element)
      : element[it]
    
    obj.hasOwnProperty(property)
      ? obj[property].push(element)
      : Object.defineProperty(obj, property,{value:[element], enumerable:true})
  })
  
  return obj
}