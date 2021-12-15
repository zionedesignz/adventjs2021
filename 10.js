export default function getCoins(change) {
  let changeArray = []
  do{
    if(change>50){
      changeArray[5]++
      change -= 50
    } else if(change>20) {
      changeArray[4]++
      change -= 20
    } else if(change>10) {
      changeArray[3]++
      change -= 10
    } else if(change>5) {
      changeArray[2]++
      change -= 5
    } else if(change>2) {
      changeArray[1]++
      change -= 2
    } else if(change>1) {
      changeArray[0]++
      change -= 1
    }
  }while(change>0)
  return changeArray
}