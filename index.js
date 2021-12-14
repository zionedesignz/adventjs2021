import contarOvejas from './01.js'
import listGifts from './02.js'
import isValid from './03.js'
import createXmasTree from './04.js'
import daysToXmas from './05.js'
import sumPairs from './06.js'
import contains from './07.js'

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
const date1 = new Date('Dec 24, 2021 23:59:59')
const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}
const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

console.log('#01 - Con la emoción de que llega la navidad, nos está costando dormir bastante últimamente. Vamos a intentar usar este pequeño truco que nos ayudará a dormir más rápido 🐑')
console.log(contarOvejas(ovejas))
console.log('#02 - ¡Menudo lío 😵! Un elfo está ayudando a Santa Claus. Pensaba que le vendría ya ordenado de cada regalo cuantas unidades debe conseguir... ¡y le ha llegado una carta ✉️! ¡Ayúdale!')
console.log(listGifts(carta))
console.log('#03 - ¡El Grinch anda suelto y quiere fastidiar la Navidad! 😱 Vamos a arreglar el lío que ha montado en la fábrica de regalos de Santa Claus')
console.log(isValid(letterGood), isValid(letterBad))
console.log('#04 - Creo que ya podemos sacar el gorro navideño, el turrón... ¡Y el árbol de navidad! 🎄 Vamos a montarlo con JavaScript.')
console.log(createXmasTree(7))
console.log('#05 - ¡Qué ganas de abrir los regalos 🎁! Estoy tan nervioso que no paro de contar los días que faltan 🤣. ¿Me ayudas creando un programita? ¡Venga!')
console.log(daysToXmas(date1))
console.log('#06 - Buffff! Ya huelo las vacaciones pero todavía falta terminar los exámenes finales. ¡Y toca un poco de matemáticas! 😱 ¡Ayúdame!')
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6))
console.log('#07 - Tenemos un amigo que trabaja en una tienda y no es capaz de encontrar en el almacén los productos que tiene... ¿Le ayudamos?')
console.log(contains(almacen, 'camiseta'), contains(otroAlmacen, 'gameboy'))