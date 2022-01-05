export default function canMouseEat(direction, game) {
  let mouseEat = false
  let foods = []
  let mouse = []
  let mouseDirection = []
  game.forEach((rows, rowsIndex) => {
    rows.forEach((cols, colsIndex) => {
      if(cols === '*') foods.push([rowsIndex, colsIndex])
      if(cols === 'm') mouse.push(rowsIndex, colsIndex)
    })
  })
  
  const [row, col] = mouse
  if(direction === 'up') mouseDirection = [row-1, col]
  if(direction === 'down') mouseDirection = [row+1, col]
  if(direction === 'right') mouseDirection = [row, col+1]
  if(direction === 'left') mouseDirection = [row, col-1]
    
  foods.forEach(food => {
    const [foodRow, foodCol] = food
    const [mouseRow, mouseCol] = mouseDirection
    if(foodRow === mouseRow && foodCol === mouseCol) mouseEat = true
  })
  return mouseEat
}