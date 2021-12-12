export default function contarOvejas (ovejas) {
  return ovejas.filter(oveja => {
    const ovejaNameClean = oveja.name.trim().toLowerCase()
    return oveja.color === 'rojo' 
    && ovejaNameClean.includes('n') 
    && ovejaNameClean.includes('a') 
      ? oveja 
      : ''
  })
}