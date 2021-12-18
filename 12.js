export default function getMinJump(obstacles) {
  let jump = 1
  let valid = true
  do{
    const boolArr = obstacles.map(obstacle=>(
      obstacle%jump===0
        ? true
        : false
    ))

    valid = boolArr.includes(true)
      ? true
      : false

    valid ? jump++ : ''
  }while(valid)
  return jump
}