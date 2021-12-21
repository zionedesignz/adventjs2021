export default function checkSledJump(heights) {
  let goDown = false
  let valid = null
  heights.forEach((height, position, arr) => {
    let beforeHeight
    let lastPosition = arr.length-1
    if(position>0) {
      beforeHeight = arr[position-1]
      // Assign when goDown && validate
      if(height<beforeHeight && valid===null) {
        goDown = true
        valid = true
      }
      // Invalidate when position its same
      if(height===beforeHeight && valid===null) {
        valid=false
      }
      // Invalidate when goUp after goDown
      if(height>beforeHeight && goDown===true) {
        valid = false
      }
      // Invalidate when only goUp
      if(goDown===false && position===lastPosition) {
        valid=false
      }
    }
  })
  return valid
}