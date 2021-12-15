export default function maxProfit(prices) {
  let maxDiff = -1
  prices.forEach( (price, ind, arr) => {
    arr.forEach( (val, i) => {
      if(price<val 
        && ind !== i  
        && ind < i 
        && (val-price)>maxDiff
      ) {
        maxDiff = val-price
      }
    })
  })
  return maxDiff
}