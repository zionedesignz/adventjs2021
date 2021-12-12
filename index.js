import contarOvejas from './01.js'
import listGifts from './02.js'
import isValid from './03.js'
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]
const carta = 'bici coche balón _playstation bici coche peluche'
const letterBad = 'peluche (bici [coche) bici coche balón'
const letterGood = 'bici coche (balón) bici coche peluche'

console.log('#01 - Con la emoción de que llega la navidad, nos está costando dormir bastante últimamente. Vamos a intentar usar este pequeño truco que nos ayudará a dormir más rápido 🐑')
console.log(contarOvejas(ovejas))
console.log('#02 - ¡Menudo lío 😵! Un elfo está ayudando a Santa Claus. Pensaba que le vendría ya ordenado de cada regalo cuantas unidades debe conseguir... ¡y le ha llegado una carta ✉️! ¡Ayúdale!')
console.log(listGifts(carta))
console.log('#03 - ¡El Grinch anda suelto y quiere fastidiar la Navidad! 😱 Vamos a arreglar el lío que ha montado en la fábrica de regalos de Santa Claus')
console.log(isValid(letterGood), isValid(letterBad))