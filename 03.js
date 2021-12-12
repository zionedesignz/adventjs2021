export default function isValid(letter) {
  if(letter.includes('{') 
    || letter.includes('[') 
    || letter.includes('()')) 
  { return false }
  const letterClean = letter.split(' ')
  let validate = true
  letterClean.forEach(el => {
    if(el.includes('(') 
      && !(el.includes(')'))) 
    { validate = false }
  })
  return validate
 }